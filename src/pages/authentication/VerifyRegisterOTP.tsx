import { useState, useEffect } from "react";
import { Button } from "@/components/button/Button";
import Container from "@/components/wrapper/Container";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { toast } from "react-toastify";
import {
  useRegenerateRegisterOtpMutation,
  useVerfifyRegistrationOTPMutation,
} from "@/redux/features/auth/AuthApiSlice";

import { useNavigate, useSearchParams } from "react-router";
import { setToken} from "@/utils/token";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/redux/features/auth/AuthSlice";

type OTPFormData = {
  otp: string;
};

export default function VerifyRegisterOTP() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const email = searchParams.get("email");

  const [verify, { isLoading }] = useVerfifyRegistrationOTPMutation();
  const [regenerate, { isLoading: loading }] = useRegenerateRegisterOtpMutation();

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Handle OTP submission
  const onSubmit = async (data: OTPFormData) => {
    try {
      const result = await verify({
        otp: data.otp.trim(),
        email,
      }).unwrap();

      // If success
      if (result?.status === 200 || result?.success) {
        toast.success("Verification success");
        setToken("accessToken" ,result?.user?.accessToken);
        setToken("refreshToken" ,result?.user?.refreshToken);
        dispatch(setAuthUser(result?.user));
        navigate('/settings/dashboard', {replace:true})
      }

      // If backend sent `resendAfter`, start countdown
      if (result?.resendAfter) {
        setTimeLeft(result.resendAfter);
      }

      // If backend returned error
      if (result?.data?.error) {
        throw new Error(result?.data?.error);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  // Handle resend OTP
  const handleResend = async () => {
    try {
      // early return if still resend time left.
       if(timeLeft > 0) return;

      const result = await regenerate({email}).unwrap(); // Or create a dedicated resend endpoint

      if(result?.success){
            setTimeLeft(60);  
            toast.success("OTP resent successfully");
            return;
      }
    } catch (error: any) {
      if(error.status === 429){
        error?.data?.message && toast.error(error?.data?.message);
        setTimeLeft(error.data?.waitSeconds)
      }else{
        toast.error(error?.data?.message || "Failed to resend OTP");
      }
    }
  };
  
  return (
    <div className="w-full">
      <Container className="flex items-center justify-center min-h-[90vh] py-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[var(--clr-white)] shadow-lg rounded-lg p-8 w-full max-w-md border border-slate-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-[var(--clr-text-heading)] text-center">
            Verify Email
          </h2>

          {/* OTP Input */}
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              OTP
            </label>
            <input
              id="otp"
              type="text"
              {...register("otp", {
                required: "OTP is required",
              })}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                errors.otp ? "border-[var(--clr-danger)]" : "border-gray-300"
              }`}
              placeholder="Enter otp from your email"
              disabled={isLoading}
            />
            {errors.otp && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.otp.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            {isLoading ? (
              <LoadingSpinner
                className="min-h-[39.81px]"
                containerClass="w-6 md:w-8 h-6 2xl:h-8"
                squareClasses={["bg-black", "bg-black", "bg-black "]}
              />
            ) : (
              <Button
                type="submit"
                className={`ecj_fs-base flex items-center justify-center gap-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isLoading || loading}
                label={"Verify"}
              />
            )}
          </div>

          {/* Footer */}
          <div className="flex gap-2 items-center  mt-4 text-center text-sm text-[var(--clr-text-body)]">
            <p>Didn’t get OTP?</p>{" "} 

            {loading ? <LoadingSpinner  totalVisuals={3}
        containerClass="w-4 md:w-5 h-4 2xl:h-5 ml-3" /> :
            <button
             type="button"
              className={`link-text ecj_fs-base ${timeLeft > 0 || loading ? "pointer-events-none":""}`}
              onClick={handleResend}
              disabled={timeLeft > 0 || loading}
            >
              {timeLeft > 0
                ? `Resend after ${timeLeft}s`
                : "Resend"}
            </button>
            }
          </div>
        </form>
      </Container>
    </div>
  );
}
