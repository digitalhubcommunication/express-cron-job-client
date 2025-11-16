import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  deletePackage,
  updatePackage,
} from "@/redux/features/packages/packages";
import { RootState } from "@/redux/store";
import { IPackage } from "@/types/types";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/button/Button";
import Card from "@/components/shared/Card";
import { toast } from "react-toastify";

import {
  useDeletePackageMutation,
  useUpdatePackageMutation,
} from "@/redux/features/adminActions/adminActions";
import PageLoading from "@/components/loading/PageLoading";
import ErrorMessage from "@/components/shared/ErrorMessage";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { SpinnerIcon, XMarkIcon } from "@/components/icons/Icons";
import { useGetPackagesQuery } from "@/redux/features/packages/packageApiSlice";

const packageSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  validity: z.number("Validity Days is required").min(1, "Minimum 1 day"),
  price: z.number("Price is required").min(0),
  intervalInMs: z.number("Interval in (MS) is required").min(1000, "Minimum 1000ms"),
  manualCronLimit: z.number("Manual Cron limit required"),
  status: z
    .enum(["enabled", "disabled"])
    .refine((val) => val === "enabled" || val === "disabled", {
      message: "Status must be either 'enabled' or 'disabled'",
    }),
});

type PackageFormData = z.infer<typeof packageSchema>;

const SubscriptionPackage = ({ item }: { item: IPackage }) => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state: RootState) => state.packages);
  const [modifyPackage, { isLoading }] = useUpdatePackageMutation();
  const [removePackage, { isLoading: loading }] = useDeletePackageMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PackageFormData>({
    resolver: zodResolver(packageSchema),
    defaultValues: item,
  });

  useEffect(() => {
  }, [packages]);

  // hook to watch the fields.
  const watchedValues = watch();
  const baselineRef = useRef(item);
  function getChangedFields<T extends Record<string, any>>(
    a: T,
    b: T
  ): Partial<T> {
    const changes: Partial<T> = {};
    for (const key in a) {
      if (a[key] !== b[key]) changes[key] = a[key];
    }
    return changes;
  }

  const changedFields = useMemo(
    () => getChangedFields(watchedValues, item),
    [watchedValues, item]
  );

  // handlers
  const onSubmit = async () => {
    if (Object.keys(changedFields).length === 0) {
      toast.error("No changes detected.");
      return;
    }

    const agreed = confirm("Are you sure you want to update this package?");
    if (!agreed) return;
    try {
      const res = await modifyPackage({
        id: item._id,
        data: watchedValues,
      }).unwrap();

      if (res.success) {
        toast.success(res.message);
        dispatch(updatePackage(res.data));
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      toast.error("Error updating package. Try again!!");
      console.log(error);
    }
  };
  const handleDelete = async () => {
    const agreed = confirm("Are you sure you want to delete this package?");
    if (!agreed) return;
    try {
      const res = await removePackage(item._id).unwrap();
      if (res.success) {
        dispatch(deletePackage(item._id));
        toast.success("Delete successfull");
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      console.log(error?.data?.message);
      toast.error("");
    }
  };

    // if prop changes (e.g., Redux update), reset baseline
  useEffect(() => {
    reset(item);
    baselineRef.current = item;
  }, [item, reset]);

  return (
    <Card
      key={item._id}
      className={`relative w-full md:!p-4 ${
        isLoading || (loading && "pointer-events-none")
      }`}
    >
      <button
        title="Click to delete"
        onClick={handleDelete}
        className="absolute top-3 right-3 text-red-500"
      >
        {loading ? (
          <SpinnerIcon className=" w-5 lg:w-6 h-5 lg:h-6" />
        ) : (
          <XMarkIcon />
        )}
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 z-0">
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
              {...register("intervalInMs", { valueAsNumber: true })}
              className="input"
              defaultValue={item?.intervalInMs}
              min={3000}
              step={1000}
            />
          </div>
          {errors.intervalInMs && (
            <p className="text-red-500">{errors.intervalInMs.message}</p>
          )}
        </div>
        <div className="w-full">
          <div className="flex items-center gap-5">
            <label className="whitespace-nowrap">Status</label>
            <select
              className="input"
              {...register("status", { required: true })}
            >
              <option
                className=""
                defaultChecked={item.status === "enabled"}
                value="enabled"
              >
                Enabled
              </option>
              <option
                defaultChecked={item.status === "disabled"}
                value="disabled"
              >
                Disabled
              </option>
            </select>
          </div>
          {errors.status && (
            <p className="text-red-500">{errors.status.message}</p>
          )}
        </div>
         <div className="w-full">
          <div className="flex items-center gap-5">
            <label className="whitespace-nowrap">Manual Cron limit</label>
            <input
              type="number"
              {...register("manualCronLimit", { valueAsNumber: true })}
              className="input"
              defaultValue={item?.manualCronLimit}
              min={1}
              step={1}
            />
          </div>
          {errors.manualCronLimit && (
            <p className="text-red-500">{errors.manualCronLimit.message}</p>
          )}
        </div>
        

        {isLoading ? (
          <div className="min-h-10 flex items-center justify-start ml-10">
            <LoadingSpinner
              totalVisuals={3}
              containerClass="w-4 md:w-5 h-4 2xl:h-5"
            />
          </div>
        ) : (
          <div className="w-full flex items-center justify-between gap-5">
            <Button label="Update" type="submit" />
          </div>
        )}
      </form>
    </Card>
  );
};

export default function SubscriptionPackages() {
  // hooks
  const {data, isFetching, isError} = useGetPackagesQuery({});

  if (isFetching) return <PageLoading />;

  if (isError)
    return <ErrorMessage key="ERROR_MESSAGE_LOADING_PACKAGES" msg={"Error loading packages"} />;

  if (!data?.packages.length){
    return <p className="mt-20 text-center">Please add a package first</p>;
  }

  return (
    <div className="w-full z-0 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-10">
      {data?.packages && (data?.packages as IPackage[])?.map((item) => (
        <SubscriptionPackage key={item._id} item={item} />
      ))}
    </div>
  );
}