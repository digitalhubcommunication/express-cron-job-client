import { PlusIcon } from "@/components/icons/Icons";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { IUser } from "@/types/types";
import { TUpdateAction } from "../UserDetails";
import { useEffect } from "react";

export type TAddManualDomainFormData = {
  url: string;
  title: string;
  executeInMs: string;
};

type TProps = {
  user: IUser;
  loading: boolean;
  cb: (data: TAddManualDomainFormData) => void;
  updateAction: TUpdateAction;
};

const AddManualDomain = ({ loading, updateAction, cb, user }: TProps) => {
  const ACTIVE_KEY = "OPEN_ADMIN_ADD_NEW_CRON_MODAL";
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAddManualDomainFormData>();

  // Handle URL submission
  const onSubmit = async (data: TAddManualDomainFormData) => {
    if (!data || !data.title || !data.url || !data.executeInMs) return;
    cb(data);
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  if (!user) return <></>;

  const limit = user?.subscription?.manualCronLimit || 3;
  const remainingLimit = limit - user?.manualCronCount;

  return (
    <>
      <button
        onClick={() => dispatch(toggleModal(ACTIVE_KEY))}
        className="btn btn-success !pl-[14px] flex items-center gap-2"
      >
        <PlusIcon /> <span>Add New</span>
      </button>

      {/* ======= modal to open add new cron form ======= */}
      <CustomModal
        activeKey={ACTIVE_KEY}
        key={ACTIVE_KEY}
        containerStyle="bg-white max-w-[600px] md:p-1 lg:p-2"
        wrapperContainerStyle="bg-slate-500/70"
      >
        <CustomModalHeader title="Add new cron" />

        <div className="w-full h-full p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 flex-wrap gap-5 flex items-center justify-between my-5">
              <h6 className="">Domain: {user?.domain || ""}</h6>
              <p>Allowed to add : {remainingLimit}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                    errors.title
                      ? "border-[var(--clr-danger)]"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="mb-1" htmlFor="url">
                  Execute in
                </label>
                <select
                  {...register("executeInMs", {
                    required: "Execution time is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                    errors.executeInMs
                      ? "border-[var(--clr-danger)]"
                      : "border-gray-300"
                  }`}
                >
                  <option value="27000">27 Seconds</option>
                  <option value="24000">24 Seconds</option>
                  <option value="21000">21 Seconds</option>
                  <option value="18000">18 Seconds</option>
                  <option value="15000">15 Seconds</option>
                  <option value="12000">12 Seconds</option>
                  <option value="9000">9 Seconds</option>
                  <option value="7000">7 Seconds</option>
                  <option value="5000">5 Seconds</option>
                  <option value="3000">3 Seconds</option>
                </select>
              </div>
              <div>
                <label className="mb-1" htmlFor="url">
                  URL
                </label>
                <input
                  type="text"
                  {...register("url", {
                    required: "Url is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                    errors.url
                      ? "border-[var(--clr-danger)]"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter cron URL"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex flex-wrap gap-5 justify-between items-center mt-6">
              {loading && updateAction === "ADD_DOMAIN" ? (
                <LoadingSpinner
                  className="min-h-6 ml-10 mr-3"
                  containerClass="w-4.5 h-4.5"
                  squareClasses={["bg-black", "bg-black", "bg-black "]}
                />
              ) : (
                <button
                  type="submit"
                  className="btn btn-success flex items-center gap-2"
                >
                  Save URLs
                </button>
              )}
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default AddManualDomain;
