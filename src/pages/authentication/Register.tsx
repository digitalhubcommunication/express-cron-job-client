import { Button } from "@/components/button/Button";
import { EyeOpen, EyeSlash } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Container from "@/components/wrapper/Container";
import { countries } from "@/data/DemoData";
import { useRegisterMutation } from "@/redux/features/auth/AuthApiSlice";
import { TCountry } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

type RegisterFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  domain: string;
  mobile: string;
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [selectedCountry, setSelectedCountry] = useState<TCountry>(
    countries[0]
  );

  const number = watch("mobile");

  // handler
  const onSubmit = async (data: RegisterFormData) => {
    if (!number) return;

    // validate the number
    const cleanedNumber = number.replace(/\D/g, "");
    const isValid = selectedCountry?.format?.test(cleanedNumber) || false;

    if (!isValid) {
      setError("mobile", { type: "manual", message: "Invalid phone number" });
      return;
    }
    try {
      const fullPhoneNumber = `${selectedCountry.dialCode}${data.mobile}`;
      const result = await registerUser({...data, mobile:fullPhoneNumber}).unwrap();
      if (result?.success) {
        toast.success(result?.message);
        navigate(`/verify-register-otp?email=${data.email}`);
      } else {
        throw new Error(result?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const handleCountrySelect = (name: string) => {
    const countrySelected = countries.find((country) => country.name === name);
    if (!countrySelected) return;
    setSelectedCountry(countrySelected);
  };

  return (
    <div className="w-full">
      <Container className="flex items-center justify-center min-h-[90vh] py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[var(--clr-white)] shadow-lg rounded-lg p-8 w-full max-w-md border border-slate-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-[var(--clr-text-heading)] text-center">
            Create Account
          </h2>

          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                errors.name ? "border-[var(--clr-danger)]" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "Username is required" })}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                errors.username
                  ? "border-[var(--clr-danger)]"
                  : "border-gray-300"
              }`}
              placeholder="Enter a username"
            />
            {errors.username && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

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
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                errors.email ? "border-[var(--clr-danger)]" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

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
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
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

          {/* Domain Field */}
          <div className="mb-4">
            <label
              htmlFor="domain"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              Domain
            </label>
            <input
              id="domain"
              type="url"
              {...register("domain", { required: "Domain URL is required" })}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                errors.domain ? "border-[var(--clr-danger)]" : "border-gray-300"
              }`}
              placeholder="https://yourdomain.com/"
            />
            {errors.domain && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.domain.message}
              </p>
            )}
          </div>

          {/* Mobile Field */}
          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              Mobile Number
            </label>
            <div className="w-full flex gap-2">
              <select
                onChange={(e) => handleCountrySelect(e.target.value)}
                name=""
                id=""
                className="border rounded-md outline-none focus:ring-1 border-gray-300 focus:ring-slate-400"
              >
                {countries.map((country) => (
                  <option
                    className="flex items-center gap-2"
                    value={country.name}
                  >
                    <span>{country.flag}</span> <span>{country.dialCode}</span>
                  </option>
                ))}
              </select>
              <input
                id="mobile"
                type="tel"
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
                className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                  errors.mobile
                    ? "border-[var(--clr-danger)]"
                    : "border-gray-300"
                }`}
                placeholder={selectedCountry.example}
              />
            </div>

            {errors.mobile && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.mobile.message}
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
                label="Register"
              />
            )}
          </div>

          <p className="mt-4 text-center text-sm text-[var(--clr-text-body)]">
            Already have an account?{" "}
            <a href="/login" className="link-text">
              Sign in
            </a>
          </p>
        </form>
      </Container>
    </div>
  );
}
