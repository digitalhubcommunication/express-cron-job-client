import { Button } from "@/components/button/Button";
import { EyeOpen, EyeSlash } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Container from "@/components/wrapper/Container";
import { countries } from "@/data/DemoData";
import { useRegisterMutation } from "@/redux/features/auth/AuthApiSlice";
import { TCountry } from "@/types/types";
import { useEffect, useRef, useState } from "react";
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

  // Searchable country picker state
  const [countryQuery, setCountryQuery] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const countryRef = useRef<HTMLDivElement | null>(null);
  const countryInputRef = useRef<HTMLInputElement | null>(null);

  // filtered list
  const filteredCountries = countries.filter((c) => {
    const q = countryQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.replace(/\D/g, "").includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  // watch mobile input
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
      const result = await registerUser({
        ...data,
        mobile: fullPhoneNumber,
      }).unwrap();
      if (result?.success) {
        toast.success(result?.message);
        navigate(`/verify-register-otp?email=${data.email}`);
      } else {
        throw new Error(result?.message);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || error?.message || "Registration failed"
      );
    }
  };

  const handleCountrySelect = (name: string) => {
    const countrySelected = countries.find((country) => country.name === name);
    if (!countrySelected) return;
    setSelectedCountry(countrySelected);
    setCountryQuery(""); // clear query
    setIsCountryOpen(false);
    // focus the mobile input after selecting
    const mobileEl = document.getElementById(
      "mobile"
    ) as HTMLInputElement | null;
    mobileEl?.focus();
  };

  // close the dropdown when clicked outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!countryRef.current) return;
      if (countryRef.current.contains(e.target as Node)) return;
      setIsCountryOpen(false);
      setHighlightIndex(0);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // keyboard navigation for the country list
  useEffect(() => {
    if (!isCountryOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIndex((i) => Math.min(i + 1, filteredCountries.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const c = filteredCountries[highlightIndex];
        if (c) handleCountrySelect(c.name);
      } else if (e.key === "Escape") {
        setIsCountryOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCountryOpen, filteredCountries, highlightIndex]);

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

          {/* Mobile Field with searchable country picker */}
          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              Mobile Number
            </label>

            <div className="w-full flex gap-2 items-start">
              {/* Country Picker */}
              <div
                ref={countryRef}
                className="relative w-40"
                aria-haspopup="listbox"
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsCountryOpen((s) => !s);
                    setTimeout(() => countryInputRef.current?.focus(), 0);
                  }}
                  className="w-full px-3 py-2 border rounded-md text-left flex items-center gap-2 justify-between bg-white"
                >
                  <span className="flex items-center gap-2">
                    <span>{selectedCountry.flag}</span>
                    <span className="text-sm">{selectedCountry.dialCode}</span>
                  </span>
                  <span className="text-xs opacity-60">▼</span>
                </button>

                {/* Dropdown */}
                {isCountryOpen && (
                  <div className="absolute flex flex-col left-0 bottom-[105%] z-50 mt-2 w-full min-w-[400px] bg-white border rounded-md shadow-lg max-h-64 overflow-hidden">
                    <div className="p-2 rounded-md">
                      <input
                        autoComplete="off"
                        autoCorrect="off"
                        inputMode="tel"
                        type="tel"
                        ref={countryInputRef}
                        value={countryQuery}
                        onChange={(e) => {
                          setCountryQuery(e.target.value);
                          setHighlightIndex(0);
                        }}
                        placeholder="Search country..."
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400"
                      />
                    </div>

                    <ul
                      className="grow overflow-y-auto"
                      role="listbox"
                      aria-activedescendant={
                        filteredCountries[highlightIndex]
                          ? `country-${filteredCountries[highlightIndex].code}`
                          : undefined
                      }
                      tabIndex={-1}
                    >
                      {filteredCountries.length === 0 ? (
                        <li className="px-3 text-center py-2 text-sm text-gray-500">
                          No countries found
                        </li>
                      ) : (
                        filteredCountries.map((c, idx) => (
                          <li
                            id={`country-${c.code}`}
                            key={c.code}
                            onMouseEnter={() => setHighlightIndex(idx)}
                            onMouseDown={(e) => {
                              // use onMouseDown to prevent blur before click
                              e.preventDefault();
                              handleCountrySelect(c.name);
                            }}
                            className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-slate-100 ${
                              idx === highlightIndex
                                ? "bg-slate-100"
                                : "bg-white"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span>{c.flag}</span>
                              <div>
                                <div className="text-sm">{c.name}</div>
                                <div className="text-xs text-gray-500">
                                  {c.code} · {c.dialCode}
                                </div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">
                              {c.example?.replace(/^e\.g\.,\s*/, "")}
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Mobile input */}
              <input
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
