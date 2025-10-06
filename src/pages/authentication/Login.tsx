import { Button } from "@/components/button/Button";
import Container from "@/components/wrapper/Container";
import { useForm } from "react-hook-form";

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


    //   handlers
    const onSubmit = (data: LoginFormData) => {
        
        console.log("Login data:", data);
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
                        />
                        {errors.password && (
                            <p className="text-[var(--clr-danger)] text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>


                    <div className="w-full flex justify-center">
                        <Button type="submit" className="ecj_fs-base" label="Sign In" />
                    </div>
                    <p className="mt-4 text-center text-sm text-[var(--clr-text-body)]">
                        Don’t have an account?{" "}
                        <a
                            href="/register"
                            className="link-text"
                        >
                            Sign up
                        </a>
                    </p>
                </form>
            </Container>
        </div>
    )
}
