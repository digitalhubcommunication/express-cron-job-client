import { useState } from "react";
import { Button } from "@/components/button/Button";
import Container from "@/components/wrapper/Container";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "@/redux/features/auth/AuthApiSlice";

import { useNavigate, useSearchParams } from "react-router";
import { EyeOpen, EyeSlash } from "@/components/icons/Icons";

type OTPFormData = {
  password: string;
};

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = async (data: OTPFormData) => {
    try {
      const result = await resetPassword({
        newPassword: data.password,
        email,
        token,
      }).unwrap();

      // If success
      if (result?.status === 200 || result?.success) {
        toast.success(result.message);
        navigate("/login", { replace: true });
      }

      // If backend returned error
      if (result?.data?.error) {
        throw new Error(result?.data?.error);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full">
      <Container className="flex items-center justify-center min-h-[90vh] py-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[var(--clr-white)] shadow-lg rounded-lg p-8 w-full max-w-md border border-slate-200"
        >
          <h2 className="text-2xl font-bold mb-3 text-[var(--clr-text-heading)] text-center">
            Set new password
          </h2>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              Password
            </label>
            <div className="w-full relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                })}
                className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                  errors.password
                    ? "border-[var(--clr-danger)]"
                    : "border-gray-300"
                }`}
                placeholder="Enter your password"
                disabled={isLoading}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-[50%] translate-y-[-50%] right-3"
              >
                {!showPassword ? <EyeSlash /> : <EyeOpen />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
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
                disabled={isLoading}
                label="Submit"
              />
            )}
          </div>
        </form>
      </Container>
    </div>
  );
}
