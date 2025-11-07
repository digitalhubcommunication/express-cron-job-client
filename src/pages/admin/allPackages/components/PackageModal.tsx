import { Button } from "@/components/button/Button";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { useAddPackageMutation } from "@/redux/features/adminActions/adminActions";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { setPackage } from "@/redux/features/packages/packages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import z from "zod";

const packageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  validity: z.number().min(1, "Minimum 1 day"),
  price: z.number().min(0),
  intervalInMs: z.number().min(3000, "Minimum 3000ms"),
  manualCronLimit: z
    .number("Minimum 1 manual cron required")
    .min(1, "Minimum 1 manual cron required"),
});

type PackageFormData = z.infer<typeof packageSchema>;

export default function PackageModal() {
  const dispatch = useDispatch();
  const [addPackage, { isLoading }] = useAddPackageMutation();
  // variables
  const ACTIVE_KEY = "OPEN_NEW_PACKAGE_ADD_MODAL";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PackageFormData>({
    resolver: zodResolver(packageSchema),
  });

  // handlers
  const onSubmit = async (data: PackageFormData) => {
    try {
      const res = await addPackage({ status: "enabled", ...data }).unwrap();
      if (res.success) {
        toast.success(res.message);
        dispatch(setPackage(res.data));
        reset();
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
    finally{
      dispatch(toggleModal(null));
    }
  };

  return (
    <CustomModal
      activeKey={ACTIVE_KEY}
      key={ACTIVE_KEY}
      containerStyle="bg-white max-w-[600px] md:p-1 lg:p-2"
      wrapperContainerStyle={`bg-slate-500/70 ${
        isLoading && "pointer-events-none"
      }`}
    >
      <CustomModalHeader title="Add new package" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 z-0 ">
        <div className="w-full">
          <label className="block mb-1 whitespace-nowrap">Name</label>
          <input
            placeholder="Package Name"
            {...register("name")}
            className="input-expand"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full">
            <label className="block mb-1 whitespace-nowrap">
              Validity (days)
            </label>
            <input
              type="number"
              {...register("validity", { valueAsNumber: true })}
              className="input-expand"
              placeholder="Validity in days"
            />
            {errors.validity && (
              <p className="text-red-500">{errors.validity.message}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block mb-1 whitespace-nowrap">Price ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
              className="input-expand"
              placeholder="Price in USD"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <label className="block mb-1 whitespace-nowrap">Interval (ms)</label>
          <input
            type="number"
            {...register("intervalInMs", { valueAsNumber: true })}
            className="input-expand"
            min={3000}
            step={1000}
            placeholder="Interval in ms"
          />
          {errors.intervalInMs && (
            <p className="text-red-500">{errors.intervalInMs.message}</p>
          )}
        </div>

        <div className="w-full">
          <label className="block mb-1 whitespace-nowrap">
            Manual cron limit
          </label>
          <input
            type="number"
            {...register("manualCronLimit", { valueAsNumber: true })}
            className="input-expand"
            min={1}
            step={1}
            placeholder="Enter manual cron limit"
          />
          {errors.manualCronLimit && (
            <p className="text-red-500">{errors.manualCronLimit.message}</p>
          )}
        </div>

        {isLoading ? (
         <div className="w-full min-h-[40px] flex items-center justify-start ml-10">
           <LoadingSpinner
            totalVisuals={3}
            containerClass="w-4 md:w-5 h-4 2xl:h-5"
          />
         </div>
        ) : (
          <Button label="Add" type="submit" />
        )}
      </form>
    </CustomModal>
  );
}
