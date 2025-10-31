import { PlusIcon, TrashIcon } from "@/components/icons/Icons";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { RootState } from "@/redux/store";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

type FormData = {
 url: string;
};


const AddNewCron = () => {
  const ACTIVE_KEY = "OPEN_ADD_NEW_CRON_MODAL";
  const dispatch = useDispatch()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();

 // Handle url submission
  const onSubmit = async (data: FormData) => {
    try {
      // const result = await verify({
      //   otp: data.otp,
      //   email,
      // }).unwrap();

      // If success
      // if (result?.status === 200 || result?.success) {
      //   toast.success("Login success");
      //   setUserInfo(result?.user);
      //   dispatch(setAuthUser(result?.user));
      //   navigate('/settings/dashboard', {replace:true})
      // }

      // If backend sent `resendAfter`, start countdown
      // if (result?.resendAfter) {
      //   setTimeLeft(result.resendAfter);
      // }

      // If backend returned error
      // if (result?.data?.error) {
      //   throw new Error(result?.data?.error);
      // }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <button onClick={()=>dispatch(toggleModal(ACTIVE_KEY))} className="btn btn-success !pl-[14px] flex items-center gap-2">
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
           <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[var(--clr-white)] shadow-lg rounded-lg p-8 w-full max-w-md border border-slate-200"
        >
          <h2 className="text-2xl font-bold mb-3 text-[var(--clr-text-heading)] text-center">
            Verify It's you
          </h2>
          <p className="mb-4 text-center">We have sent an OTP to you email</p>

          {/* OTP Input */}
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block mb-2 font-medium text-[var(--clr-text-body)]"
            >
              URL
            </label>
            <input
              id="otp"
              type="number"
              {...register("url", {
                required: "URL is required",
              })}
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-slate-400 ${
                errors.url ? "border-[var(--clr-danger)]" : "border-gray-300"
              }`}
              placeholder="Enter otp from your email"
              // disabled={isLoading}
            />
            {errors.url && (
              <p className="text-[var(--clr-danger)] text-sm mt-1">
                {errors.url.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          {/* <div className="w-full flex justify-center">
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
                disabled={isLoading || loading}
                label={"Verify"}
              />
            )}
          </div> */}
        </form>
        </div>
      </CustomModal>
    </>
  );
};

export default function ManualCronActions() {
  const { manualDomains } = useSelector((state: RootState) => state.auth);

  return (
    <div className="w-full flex items-center gap-5 flex-wrap md:flex-nowrap justify-between">
      <h6 className="whitespace-nowrap">
        Total Manual Cron:{" "}
        {manualDomains && manualDomains?.length ? manualDomains?.length : 0}
      </h6>
      <div className="flex items-center gap-5 flex-wrap md:justify-end">
        <button className="btn btn-danger flex items-center gap-2">
          <TrashIcon />
          <span>Delete All</span>
        </button>
        <AddNewCron />

        <button className="btn btn-warning !pl-[14px] flex items-center gap-2">
          <PlusIcon /> <span>Bulk Add</span>
        </button>
      </div>
    </div>
  );
}
