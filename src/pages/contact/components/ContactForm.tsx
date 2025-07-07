import { Button } from "@/components/button/Button";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

interface ContactFormInputs {
  name: string;
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

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
  console.log(data, ' data from form')
    // In a real application, you would send this data to your backend
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to send message');
    //   }
    //   alert('Message sent successfully!');
    //   reset(); // Reset form after successful submission
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   alert('Failed to send message. Please try again.');
    // }

    // TODO: 
    toast.warn("API integration in progress");
    reset();
  };

  return (
    <div className="w-full  bg-white rounded-[10px] shadow-xl p-4 md:p-6 lg:p-8 border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <Button
          disabled={isSubmitting}
          type="submit"
          className="!rounded-[10px] ecj_fs-md w-full"
          label="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
