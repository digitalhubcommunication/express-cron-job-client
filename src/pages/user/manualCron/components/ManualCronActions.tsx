import { PlusIcon, TrashIcon } from "@/components/icons/Icons";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import { useAddManualDomainMutation } from "@/redux/features/userAction/userActionApi";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

type FormData = {
  urls: { url: string }[];
};

const AddNewCron = () => {
  const ACTIVE_KEY = "OPEN_ADD_NEW_CRON_MODAL";
  const dispatch = useDispatch();
  const [addManualDomain, { isLoading }] = useAddManualDomainMutation();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      urls: [{ url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "urls",
  });

  // Handle URL submission
  const onSubmit = async (data: FormData) => {
    try {
      const urls = data.urls.map((u) => u.url.trim()).filter(Boolean);
      if (urls.length === 0) {
        toast.error("Please add at least one URL");
        return;
      }

      const res = await addManualDomain(data).unwrap();
      console.log(res, " res from adding manual domain");

      // toast.success(`${urls.length} URLs added successfully!`);
      // dispatch(toggleModal(ACTIVE_KEY));
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  const limit = authUser?.subscription?.manualCronLimit || 3;
  const remainingLimit = limit - (authUser?.manualCronCount || 0);

  console.log(authUser,' auth user');
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
            <div className="flex items-center justify-between my-5">
              <h6 className="mb-3">Domain: {authUser?.domain || ""}</h6>
              <p>Allowed to add : {remainingLimit}</p>
            </div>
            <div className="flex flex-col gap-4">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <input
                    type="text"
                    {...register(`urls.${index}.url`, {
                      required: "URL is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                      errors.urls?.[index]?.url
                        ? "border-[var(--clr-danger)]"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter cron URL"
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="btn btn-danger px-3 py-2 text-xs"
                    disabled={fields.length === 1}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="w-full flex flex-wrap gap-5 justify-between items-center mt-6">
              <button
                type="button"
                onClick={() => append({ url: "" })}
                className={`btn btn-secondary flex items-center gap-2 mt-2 ${
                  remainingLimit === fields.length &&
                  "pointer-events-none opacity-0"
                }`}
              >
                <PlusIcon className="w-4 h-4" /> Add Another URL
              </button>

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
