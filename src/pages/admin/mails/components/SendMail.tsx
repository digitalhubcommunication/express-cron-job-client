import { PlusIcon } from "@/components/icons/Icons";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { useAddAdminManualDomainMutation } from "@/redux/features/adminActions/adminActions";
import { useSendMailMutation } from "@/redux/features/userAction/userActionApi";
import { Button } from "@/components/button/Button";
import { useState } from "react";

interface ContactFormInputs {
  name: string;
  subject: string;
  email: string;
  message: string;
}

type TUserToSendMail = "NEW" | "EXISTING" | "ALL";

export default function SendMail() {
  const ACTIVE_KEY = "OPEN_EMAIL_SEND_MODAL";
  const dispatch = useDispatch();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const [sendMessage, { isLoading }] = useSendMailMutation();
  const [activeUsers, setActiveUsers] = useState<TUserToSendMail>("NEW");

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // In a real application, you would send this data to your backend
    try {
      const res = await sendMessage(data);
      console.log(res, " res");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Submission error:", error);
    }

    // TODO:
    toast.warn("API integration in progress");
    reset();
  };

  if (!authUser) return <></>;
  return (
    <>
      <button
        onClick={() => dispatch(toggleModal(ACTIVE_KEY))}
        className="btn btn-success !py-1 flex items-center gap-2"
      >
        <span>Send Message</span>
      </button>

      {/* ======= modal to open add new cron form ======= */}
      <CustomModal
        activeKey={ACTIVE_KEY}
        key={ACTIVE_KEY}
        containerStyle="bg-white max-w-[600px] overflow-y-auto md:p-1 lg:p-2"
        wrapperContainerStyle="bg-slate-500/70"
      >
        <CustomModalHeader title="Send mail" />

        <div className="w-full h-full gap-5 p-4 flex items-center">
          <button onClick={()=>setActiveUsers("NEW")} className={`btn !py-1 w-full ${activeUsers ==="NEW" && "btn-success" }`}>New</button>
          <button onClick={()=>setActiveUsers("EXISTING")} className={`btn !py-1 w-full ${activeUsers ==="EXISTING" && "btn-success" }`}>Existing</button>
          <button onClick={()=>setActiveUsers("ALL")} className={`btn !py-1 w-full ${activeUsers ==="ALL" && "btn-success" }`}>All</button>
        </div>
        <div className="w-full h-full p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`space-y-6 ${isLoading ? "pointer-events-none" : ""}`}
          >
            <div>
              <label
                htmlFor="name"
                className="block ecj_fs-md font-medium mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-3 py-2 border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 focus:border-gray-500"
                } rounded-md outline-none transition-all duration-200`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name?.message}
                </p>
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
                className={`w-full px-3 py-2 border ${
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
                className={`w-full px-3 py-2 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:border-gray-500"
                } rounded-md outline-none transition-all duration-200`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
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
                className={`w-full px-3 py-2 border ${
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
      </CustomModal>
    </>
  );
}
