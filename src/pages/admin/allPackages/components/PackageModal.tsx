import { Button } from "@/components/button/Button";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import z from "zod";

const packageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  validity: z.number().min(1, "Minimum 1 day"),
  price: z.number().min(0),
  intervalInMS: z.number().min(3000, "Minimum 3000ms"),
});

type PackageFormData = z.infer<typeof packageSchema>;

export default function PackageModal() {
    const dispatch = useDispatch();
  // variables
  const ACTIVE_KEY = "OPEN_NEW_PACKAGE_ADD_MODAL";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PackageFormData>({
    resolver: zodResolver(packageSchema),
  });

  // handlers
  const onSubmit = (data: PackageFormData) => {
    dispatch(toggleModal(null));
    toast.warn("API integration in progress");
   
    console.log("Only changed fields to send in PUT request:", data);
  };

  return (
    <CustomModal
      activeKey={ACTIVE_KEY}
      key={ACTIVE_KEY}
      containerStyle="bg-white max-w-[600px] md:p-1 lg:p-2"
      wrapperContainerStyle="bg-slate-500/70"
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
            {...register("intervalInMS", { valueAsNumber: true })}
            className="input-expand"
            min={3000}
            placeholder="Interval in ms"
          />
          {errors.intervalInMS && (
            <p className="text-red-500">{errors.intervalInMS.message}</p>
          )}
        </div>

        <Button label="Add" type="submit" />
      </form>
    </CustomModal>
  );
}
