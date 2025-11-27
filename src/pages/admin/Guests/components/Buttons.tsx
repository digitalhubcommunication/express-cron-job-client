import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { Button } from "@/components/button/Button";
import {
  GroupMailIcon,
  TrashIcon,
} from "@/components/icons/Icons";
import {
  useDeleteGuestUserMutation,
  useSendMessageToGuestUsersMutation,
} from "@/redux/features/adminActions/adminActions";

interface ContactFormInputs {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export default function Buttons() {
  const ACTIVE_KEY = "OPEN_EMAIL_SEND_TO_SPECIFIC_USER_MODAL";
  const dispatch = useDispatch();
  const { authUser } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const [sendMessageToAllUser, { isLoading }] =
    useSendMessageToGuestUsersMutation();

  const [deleteUser, { isLoading: deleting }] = useDeleteGuestUserMutation();

  // handlers
  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // In a real application, you would send this data to your backend
    try {
      const res = await sendMessageToAllUser(data).unwrap();
      if (res.success) {
        reset();
        toast.success(res.message);
        dispatch(toggleModal(null));
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.error("Submission error:", error);
    }
  };

  if (!authUser) return <></>;
  return (
    <>
      <div className="w-full flex items-center gap-5">
        <button
          onClick={() => dispatch(toggleModal(ACTIVE_KEY))}
          className="btn btn-success !py-2 flex items-center gap-2"
        >
          <GroupMailIcon />
        </button>
      </div>

      {/* ======= modal to open add new cron form ======= */}
      <CustomModal
        activeKey={ACTIVE_KEY}
        key={ACTIVE_KEY}
        containerStyle="bg-white max-w-[600px] overflow-y-auto md:p-1 lg:p-2"
        wrapperContainerStyle="bg-slate-500/70"
      >
        <CustomModalHeader title={`Send mail to all guests`} />
        <div className="w-full h-full p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`space-y-6 ${isLoading ? "pointer-events-none" : ""}`}
          >
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
