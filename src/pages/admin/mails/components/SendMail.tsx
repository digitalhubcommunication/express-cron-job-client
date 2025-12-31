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
  NewMailIcon,
  TrashIcon,
} from "@/components/icons/Icons";
import {
  useDeleteUserMailsMutation,
  useSendMailToAllUserMutation,
  useSendMailToUserMutation,
} from "@/redux/features/adminActions/adminActions";
import { Dispatch, SetStateAction, useState } from "react";
import { IMail } from "@/types/types";

/* ================= TYPES ================= */

interface SingleMailInputs {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface BulkMailInputs {
  subject: string;
  message: string;
}

type TMessageType = "single" | "bulk";

/* ================= COMPONENT ================= */

export default function SendMail({ setMails }: { setMails: Dispatch<SetStateAction<IMail[]>> }) {
  const ACTIVE_KEY = "OPEN_EMAIL_SEND_TO_NEW_USER_MODAL";
  const dispatch = useDispatch();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const [messageType, setMessageType] = useState<TMessageType>("single");

  /* ================= FORMS ================= */

  const singleForm = useForm<SingleMailInputs>();
  const bulkForm = useForm<BulkMailInputs>();

  /* ================= MUTATIONS ================= */

  const [sendSingleMail, { isLoading: sendingSingle }] =
    useSendMailToUserMutation();

  const [sendBulkMail, { isLoading: sendingBulk }] =
    useSendMailToAllUserMutation();

  const [deleteMails, { isLoading: deleting }] =
    useDeleteUserMailsMutation();

  /* ================= HANDLERS ================= */

  const openMessageModal = (type: TMessageType) => {
    setMessageType(type);
    dispatch(toggleModal(ACTIVE_KEY));
  };

  const onSubmitSingle: SubmitHandler<SingleMailInputs> = async (data) => {
    try {
      const res = await sendSingleMail(data).unwrap();
      if (res.success) {
        singleForm.reset();
        toast.success(res.message);
        dispatch(toggleModal(null));
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const onSubmitBulk: SubmitHandler<BulkMailInputs> = async (data) => {
    try {
      const res = await sendBulkMail(data).unwrap();
      if (res.success) {
        bulkForm.reset();
        toast.success(res.message);
        dispatch(toggleModal(null));
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteMails({}).unwrap();
      if (res.success) {
        toast.success(res.message);
        setMails([]);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  if (!authUser) return null;

  /* ================= UI ================= */

  return (
    <>
      <div className="w-full flex items-center gap-5">
        <button
          onClick={() => openMessageModal("single")}
          className="btn btn-success !py-2"
        >
          <NewMailIcon />
        </button>

        <button
          onClick={() => openMessageModal("bulk")}
          className="btn btn-success !py-2"
        >
          <GroupMailIcon />
        </button>

        {deleting ? (
          <LoadingSpinner
            className="min-h-[39.81px]"
            containerClass="w-6 md:w-8 h-6 2xl:h-8"
          />
        ) : (
          <button
            onClick={handleDelete}
            className="btn btn-danger !py-2"
          >
            <TrashIcon />
          </button>
        )}
      </div>

      <CustomModal
        activeKey={ACTIVE_KEY}
        key={ACTIVE_KEY}
        containerStyle="bg-white max-w-[600px]"
        wrapperContainerStyle="bg-slate-500/70"
      >
        <CustomModalHeader
          title={
            messageType === "bulk"
              ? "Send mail to all users"
              : "Send mail to user"
          }
        />

        <div className="p-4 max-h-[80vh] overflow-y-auto">

          {/* ===== SINGLE USER FORM ===== */}
          {messageType === "single" && (
            <form
              onSubmit={singleForm.handleSubmit(onSubmitSingle)}
              className="space-y-6 flex flex-col w-full"
            >
              <input
                {...singleForm.register("name", {
                  required: "Name is required",
                })}
                placeholder="Name"
                className="input-expand"
              />

              <input
                {...singleForm.register("email", {
                  required: "Email is required",
                })}
                placeholder="Email"
                className="input-expand"
              />

              <input
                {...singleForm.register("subject", {
                  required: "Subject is required",
                })}
                placeholder="Subject"
                className="input-expand"
              />

              <textarea
                {...singleForm.register("message", {
                  required: "Message is required",
                })}
                placeholder="Message"
                className="input-expand"
                rows={5}
              />

              {sendingSingle ? (
                <LoadingSpinner />
              ) : (
                <Button type="submit" label="Send Message" />
              )}
            </form>
          )}

          {/* ===== BULK USER FORM ===== */}
          {messageType === "bulk" && (
            <form
              onSubmit={bulkForm.handleSubmit(onSubmitBulk)}
              className="space-y-6 flex flex-col w-full"
            >
              <input
                {...bulkForm.register("subject", {
                  required: "Subject is required",
                })}
                placeholder="Subject"
                className="input-expand"
              />

              <textarea
                {...bulkForm.register("message", {
                  required: "Message is required",
                })}
                placeholder="Message"
                className="input-expand"
                rows={5}
              />

              {sendingBulk ? (
                <LoadingSpinner />
              ) : (
                <Button
                  type="submit"
                  label="Send Message to All"
                />
              )}
            </form>
          )}
        </div>
      </CustomModal>
    </>
  );
}
