import { PlusIcon } from "@/components/icons/Icons";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import { useAddManualDomainMutation } from "@/redux/features/userAction/userActionApi";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { setManualDomain } from "@/redux/features/auth/AuthSlice";

type FormData = {
  url: string;
  title: string;
  executeInMs: string;
};

const AddNewCron = () => {
  const ACTIVE_KEY = "OPEN_ADMIN_ADD_NEW_CRON_MODAL";
  const dispatch = useDispatch();
  const [addManualDomain, { isLoading }] = useAddManualDomainMutation();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // Handle URL submission
  const onSubmit = async (data: FormData) => {
    if (!data || !data.title || !data.url || !data.executeInMs) return;

    try {
      const res = await addManualDomain(data).unwrap();
      if (res.success) {
        toast.success(res?.message);
        dispatch(toggleModal(null));
        console.log(res.domain,' domain response')
        dispatch(setManualDomain(res.domain));
        reset();
      }
    } catch (error: any) {
      console.log(error, " error updating data");
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  if(!authUser)return <></>;

  const limit = authUser?.subscription?.manualCronLimit || 3;
  const remainingLimit = limit - authUser?.manualCronCount;

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
              <h6 className="">Domain: {authUser?.domain || ""}</h6>
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
                  <option value="1800000">30 Minutes</option>
                  <option value="3600000">1 Hour</option>
                  <option value="10800000">3 Hours</option>
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
              {isLoading ? (
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

export default AddNewCron;
