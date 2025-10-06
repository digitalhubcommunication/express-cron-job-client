import { useState } from "react";
import { Button } from "@/components/button/Button";
import Container from "@/components/wrapper/Container";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

type LoginFormData = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const [loading, setLoading] = useState(false);

    // Handlers
    const onSubmit = async (data: LoginFormData) => {
        try {
            setLoading(true);

            console.log("Login data:", data);

            // Simulate async login (e.g., API call)
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // After success
            alert("Logged in successfully!");
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setLoading(false);
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
                            disabled={loading}
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
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${errors.password ? "border-[var(--clr-danger)]" : "border-gray-300"
                                }`}
                            placeholder="Enter your password"
                            disabled={loading}
                        />
                        {errors.password && (
                            <p className="text-[var(--clr-danger)] text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="w-full flex justify-center">
                        {
                            loading ?
                                <LoadingSpinner
                                   className="min-h-[39.81px]"
                                    containerClass="w-6 md:w-8 h-6 2xl:h-8"
                                    squareClasses={["bg-black", "bg-black", "bg-black "]}
                                />
                                :
                                <Button
                                    type="submit"
                                    className={`ecj_fs-base flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                    disabled={loading}
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
