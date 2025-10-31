import { useState } from "react";
import { Button } from "@/components/button/Button";
import Container from "@/components/wrapper/Container";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { toast } from "react-toastify";
import { useForgotPasswordMutation, useLoginMutation } from "@/redux/features/auth/AuthApiSlice";
import { EyeOpen, EyeSlash } from "@/components/icons/Icons";
import { useNavigate } from "react-router";

type LoginFormData = {
    email: string;
    password: string;
};

export default function LoginPage() {
     const navigate = useNavigate() 
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError,
          clearErrors,
    } = useForm<LoginFormData>();
    const [login, {isLoading}] = useLoginMutation();
    const [forgotPassword, {isLoading:fpasswordLaoding}] = useForgotPasswordMutation()
    const [showPassword, setShowPassword] = useState(false)

    // Handlers
    const onSubmit = async (data: LoginFormData) => {
        try {
            const result = await login(data).unwrap()
            if(result?.success){
                navigate(`/verify-login-otp?email=${data.email}`)
            }else{
                throw new Error(result?.data?.error);
            }
        } catch (error:any) {
            toast.error(error?.data?.message);
            // console.error("Login error:", error?.data?.message);
        } 
    };


    const handleForgotPasssword = async()=>{
       try {
         const redirectBaseUrl = "http://localhost:5173/reset-password";
        const email = watch("email");

        if(!email){
            setError("email", {type:"manual",  message: "Enter email to reset password"})
            return ;
        }

         clearErrors("email");
        const data = {
            redirectBaseUrl,
            email
        }
        const res = await forgotPassword(data).unwrap()
        if(res.success){
            toast.success("A password reset link has been sent to your email");
        }else{
           toast.error(res.message)
        }
       } catch (error:any) {
        toast.error(error?.data?.message)
        console.log(error);
       }
    }

    return (
        <div className="w-full">
            <Container className="flex items-center justify-center min-h-[90vh] py-20">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`bg-[var(--clr-white)] shadow-lg rounded-lg p-8 w-full max-w-md border border-slate-200 ${!!fpasswordLaoding || !!isLoading && "pointer-events-none"}`}
                >
                    <h2 className="text-2xl font-bold mb-6 text-[var(--clr-text-heading)] text-center">
                        Login
                    </h2>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium text-[var(--clr-text-body)]"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${errors.email ? "border-[var(--clr-danger)]" : "border-gray-300"
                                }`}
                            placeholder="Enter your email"
                            disabled={isLoading}
                        />
                        {errors.email && (
                            <p className="text-[var(--clr-danger)] text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
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
                            type={showPassword ? "text":"password"}
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${errors.password ? "border-[var(--clr-danger)]" : "border-gray-300"
                                }`}
                            placeholder="Enter your password"
                            disabled={isLoading}
                        />

                        <button type="button" onClick={()=>setShowPassword(prev=>!prev)} className="absolute top-[50%] translate-y-[-50%] right-3">
                            {!showPassword ? <EyeSlash />:<EyeOpen /> }
                            
                        </button>
                        </div>
                        {errors.password && (
                            <p className="text-[var(--clr-danger)] text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}

                      <div className="mt-2 flex flex-start">
                          {
                            fpasswordLaoding ? <LoadingSpinner
                                   className="min-h-6 ml-10"
                                    containerClass="w-3 h-3"
                                    squareClasses={["bg-black", "bg-black", "bg-black "]}
                                />:
                        <button onClick={handleForgotPasssword} className="link-text" type="button">Forgot password?</button>
                        }
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full flex justify-center">
                        {
                            isLoading ?
                                <LoadingSpinner
                                   className="min-h-[39.81px]"
                                    containerClass="w-6 md:w-8 h-6 2xl:h-8"
                                    squareClasses={["bg-black", "bg-black", "bg-black "]}
                                />
                                :
                                <Button
                                    type="submit"
                                    className={`ecj_fs-base flex items-center justify-center gap-2 ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                    disabled={isLoading}
                                    label={"Sign In"}
                                />
                        }

                    </div>

                    {/* Footer */}
                    <p className="mt-4 text-center text-sm text-[var(--clr-text-body)]">
                        Don’t have an account?{" "}
                        <a href="/register" className="link-text">
                            Register
                        </a>
                    </p>
                </form>
            </Container>
        </div>
    );
}
