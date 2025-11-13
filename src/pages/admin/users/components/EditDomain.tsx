import { EditIcon } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { RootState } from "@/redux/store";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ITypeOfDomain } from "./UserDomainCard";
import { msToTimeString } from "@/utils/utils";
import { useUpdateUserMutation } from "@/redux/features/adminActions/adminActions";
import { TDomain } from "@/types/types";

type TDomainStatus = "enabled" | "disabled";

type FormData = {
  url: string;
  executeInMs: number;
  status: TDomainStatus;
};

type TUpdateBody = {
  defaultDomains?: any;
  manualDomains?: any;
};

type Props = {
  domain: ITypeOfDomain;
  userId: string;
};

export default function EditDomain({ domain, userId }: Props) {
  // variables
  const ACTIVE_KEY = `OPEN_USER_DOMAIN_EDIT_MODAL_${domain._id}`;
  const dispatch = useDispatch();
  const [updateUserDomain, { isLoading }] = useUpdateUserMutation();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      url: domain.url,
      executeInMs: domain.executeInMs,
      status: domain.status as TDomainStatus,
    },
  });

  const executeSeconds = watch("executeInMs");

  // Handle URL submission
  const onSubmit = async (data: FormData) => {
    if (!data || !data.status || !data.url || !data.executeInMs) return;

    const dataToUpdate: { [key: string]: any } = {
      _id: domain._id,
    };

    if (data.executeInMs && data.executeInMs !== domain.executeInMs) {
      dataToUpdate["executeInMs"] = data.executeInMs;
    }
    if (data.url && data.url !== domain.url) {
      dataToUpdate["url"] = data.url;
    }
    if (data.status && data.status !== domain.status) {
      dataToUpdate["status"] = data.status;
    }

    const changedKeys = Object.keys(dataToUpdate).filter(
      (key) => key !== "_id"
    );

    if (changedKeys.length === 0) {
      toast.info("No changes detected. Nothing to update.");
      return;
    }

    const updateBody: TUpdateBody = {};
    if (domain.domainType === "default") {
      updateBody["defaultDomains"] = [dataToUpdate];
    } else {
      updateBody["manualDomains"] = [dataToUpdate];
    }

    try {
      const res = await updateUserDomain({
        id: userId,
        data: updateBody,
      }).unwrap();
      if (res.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      console.log(error, " error updating data");
      toast.error(error?.data?.message || "Something went wrong");
    } finally {
      dispatch(toggleModal(null));
    }
  };

  if (!authUser) return <></>;

  return (
    <>
      <button
        onClick={() => dispatch(toggleModal(ACTIVE_KEY))}
        className="inline absolute right-5 top-5"
      >
        <EditIcon className="w-6 h-6" />
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
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Title: </span>
                <span>{domain.title}</span>
              </p>
              {domain.domainType === "default" ? (
                <></>
              ) : (
                <div>
                  <label className="mb-1" htmlFor="url">
                    Execute in {msToTimeString(executeSeconds)}
                  </label>
                  <input
                    type="number"
                    {...register("executeInMs", {
                      required: "Execution time is required",
                      min: {
                        value: 3000,
                        message: "Minimum 3000 MS is required",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                      errors.executeInMs
                        ? "border-[var(--clr-danger)]"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter execution time in seconds"
                  />
                  {!!errors?.executeInMs && (
                    <p className="mt-1 text-red-500">
                      {errors.executeInMs?.message}
                    </p>
                  )}
                </div>
              )}

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
                {!!errors?.url && (
                  <p className="mt-1 text-red-500">URL is required</p>
                )}
              </div>

              <div>
                <label className="mb-1" htmlFor="url">
                  Status
                </label>
                <select
                  defaultValue={domain.status}
                  {...register("status", {
                    required: "Execution time is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400`}
                >
                  <option value="enabled">Enable</option>
                  <option value="disabled">Disable</option>
                </select>
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
                  Update domain
                </button>
              )}
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
}
