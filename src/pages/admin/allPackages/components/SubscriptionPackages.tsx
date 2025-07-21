import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cronPackages } from "@/data/DemoData";
import { setPackages } from "@/redux/features/packages/packages";
import { RootState } from "@/redux/store";
import { TPackage } from "@/types/types";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/button/Button";
import Card from "@/components/shared/Card";
import { toast } from "react-toastify";

const packageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  validity: z.number().min(1, "Minimum 1 day"),
  price: z.number().min(0),
  intervalInMS: z.number().min(1000, "Minimum 1000ms"),
});

type PackageFormData = z.infer<typeof packageSchema>;

const SubscriptionPackage = ({ item }: { item: TPackage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PackageFormData>({
    resolver: zodResolver(packageSchema),
    defaultValues: item,
  });

  // hook to watch the fields.
  const watchedValues = watch();
  const changedFields = useMemo(() => {
    const changes: Partial<PackageFormData> = {};
    if (watchedValues.name !== item.name) changes.name = watchedValues.name;
    if (watchedValues.validity !== item.validity)
      changes.validity = watchedValues.validity;
    if (watchedValues.price !== item.price) changes.price = watchedValues.price;
    if (watchedValues.intervalInMS !== item.intervalInMS)
      changes.intervalInMS = watchedValues.intervalInMS;
    return changes;
  }, [watchedValues, item]);

  // handlers

  const onSubmit = () => {
    if (Object.keys(changedFields).length === 0) {
      toast.error("No changes detected.");
      return;
    }

    toast.warn("API integration in progress");

      console.log("Only changed fields to send in PUT request:", changedFields);
  };

  return (
    <Card key={item._id} className="w-full md:!p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 z-0"
      >
        <div className="w-full">
          <div className="w-full flex items-center gap-5">
            <label className="whitespace-nowrap">Name</label>
            <input {...register("name")} className="input" />
          </div>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="w-full">
          <div className="flex items-center gap-5">
            <label className="whitespace-nowrap">Validity (days)</label>
            <input
              type="number"
              {...register("validity", { valueAsNumber: true })}
              className="input"
            />
          </div>
          {errors.validity && (
            <p className="text-red-500">{errors.validity.message}</p>
          )}
        </div>

        <div className="w-full">
          <div className="flex items-center gap-5">
            <label className="whitespace-nowrap">Price ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
              className="input"
            />
          </div>
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div className="w-full">
          <div className="flex items-center gap-5">
            <label className="whitespace-nowrap">Interval (ms)</label>
            <input
              type="number"
              {...register("intervalInMS", { valueAsNumber: true })}
              className="input"
              min={3000}
              step={1000}
            />
          </div>
          {errors.intervalInMS && (
            <p className="text-red-500">{errors.intervalInMS.message}</p>
          )}
        </div>

        <Button label="Update" type="submit" />
      </form>
    </Card>
  );
};

export default function SubscriptionPackages() {
  // hooks
  const dispatch = useDispatch();
  const { packages } = useSelector((state: RootState) => state.packages);

  // load the packages fron backend
  useEffect(() => {
    dispatch(setPackages(cronPackages));
  }, [dispatch]);

  if (!packages.length)
    return <p className="mt-20 text-center">Please add a package first</p>;

  return (
    <div className="w-full z-0 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-10">
      {packages.map((item) => (
        <SubscriptionPackage key={item._id} item={item} />
      ))}
    </div>
  );
}
