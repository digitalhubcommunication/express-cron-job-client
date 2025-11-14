import { Button } from "@/components/button/Button";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { useSendMailMutation } from "@/redux/features/userAction/userActionApi";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

interface ContactFormInputs {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();
  const [sendMessage, { isLoading }] = useSendMailMutation();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // In a real application, you would send this data to your backend
    try {
      const res = await sendMessage(data).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        throw new Error(res.message);
      }

      reset(); // Reset form after successful submission
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error?.data?.message);
    }
    // reset();
  };

  return (
    <div className="w-full  bg-white rounded-[10px] shadow-xl p-4 md:p-6 lg:p-8 border border-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-6 ${isLoading ? "pointer-events-none" : ""}`}
      >
        <div>
          <label htmlFor="name" className="block ecj_fs-md font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-3 py-2 md:py-2.5 border ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-gray-500"
            } rounded-md outline-none transition-all duration-200`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block ecj_fs-md font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject", {
              required: "Subject is required",
            })}
            className={`w-full px-3 py-2 md:py-2.5 border ecj_fs-base ${
              errors.subject
                ? "border-red-500"
                : "border-gray-300 focus:border-gray-500"
            } rounded-md outline-none transition-all duration-200`}
            placeholder="Enter subject"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block ecj_fs-md font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-3 py-2 md:py-2.5 border ecj_fs-base ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-gray-500"
            } rounded-md outline-none transition-all duration-200`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block ecj_fs-md font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", { required: "Message is required" })}
            className={`w-full px-3 py-2 md:py-2.5 border ecj_fs-base ${
              errors.message
                ? "border-red-500"
                : "border-gray-300 focus:border-gray-500"
            } rounded-md outline-none transition-all duration-200`}
            placeholder="Your message..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {isLoading ? (
          <LoadingSpinner
            className="min-h-[39.81px]"
            containerClass="w-6 md:w-8 h-6 2xl:h-8"
          />
        ) : (
          <Button
            disabled={isSubmitting}
            type="submit"
            className="!rounded-[10px] ecj_fs-md w-full"
            label="Send Message"
          />
        )}
      </form>
    </div>
  );
};

export default ContactForm;
