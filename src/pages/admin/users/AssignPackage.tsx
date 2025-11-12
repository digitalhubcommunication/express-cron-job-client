import LoadingSpinner from "@/components/loading/LoadingSpinner";
import PageLoading from "@/components/loading/PageLoading";
import { CustomModal, CustomModalHeader } from "@/components/modal/CustomModal";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { useAssignUserPackageMutation } from "@/redux/features/adminActions/adminActions";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";
import { useGetPackagesQuery } from "@/redux/features/packages/packageApiSlice";
import { IPackage } from "@/types/types";
import { Dispatch, SetStateAction} from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type CardProps = {
  item: IPackage;
  id: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
const PackageCard = ({ item, id, setLoading }: CardProps) => {
    // hooks
  const [assginPackage, { isLoading }] = useAssignUserPackageMutation();
  const dispatch = useDispatch()

  //   handlers
  const handleAssign = async (subcribePackage: IPackage) => {
    if (subcribePackage.status !== "enabled") {
      toast.error("Please enable the package first");
      return;
    }
    setLoading(true);

    try {
      const data = { userId: id, packageId: subcribePackage._id };
      const res = await assginPackage(data).unwrap();
      if (res.success) {
        toast.success(res?.message);
        dispatch(toggleModal(null));
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    } finally {
      setLoading(false);

    }
  };

  const btnStyle =
    "py-1 rounded-md mt-1 px-3.5 bg-blue-500 hover:bg-blue-600 text-white";

  return (
    <div className="w-full bg-slate-100 p-2 rounded-sm shadow">
      <h6 className="ecj_fs-base">Name : {item.name}</h6>
      <p className="ecj_fs-sm">
        Interval : {item.intervalInMs && item.intervalInMs / 1000}s
      </p>
      <p className="ecj_fs-sm">Manual Cron : {item.manualCronLimit}</p>
      <p className="ecj_fs-sm">
        Status :{" "}
        <span
          className={`px-2 rounded-sm py-0.5 text-white ecj_fs-xxs ${
            item.status === "enabled" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {item.status}
        </span>
      </p>
      <p className="ecj_fs-sm">Validity : {item.validity}days</p>

      {isLoading ? (
        <div className="w-full flex items-start pl-10">
          <LoadingSpinner
            className="min-h-[39.81px]"
            containerClass="w-3 md:w-4 h-3 2xl:h-4"
          />
        </div>
      ) : (
        <button
          onClick={() => handleAssign(item)}
          className={`${btnStyle} mt-2 ecj_fs-sm !py-0.5`}
          type="button"
        >
          Assign
        </button>
      )}
    </div>
  );
};

// ====== root component ======
type Props = {
  id: string;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
export default function AssignPackage({ id, loading, setLoading }: Props) {
  // variables
  const ACTIVE_KEY = "OPEN_PACKAGE_ASSIGN_CUSTOM_MODAL";

  // hooks
  const dispatch = useDispatch();
  const { data, isFetching, isError } = useGetPackagesQuery({});

  // conditional rendering
  if (isFetching) return <PageLoading />;

  if (isError)
    return (
      <ErrorMessage
        key="ERROR_MESSAGE_LOADING_PACKAGES"
        msg={"Error loading packages"}
      />
    );

  if (!data?.packages.length) {
    return <p className="mt-20 text-center">Please add a package first</p>;
  }

  const btnStyle =
    "py-1 rounded-md mt-1 px-3.5 bg-blue-500 hover:bg-blue-600 text-white";

  return (
    <>
      <button
        onClick={() => dispatch(toggleModal(ACTIVE_KEY))}
        className={btnStyle}
      >
        Assign Package
      </button>
      <CustomModal
        wrapperContainerStyle={`bg-slate-500/70 ${
          loading && "pointer-events-none"
        }`}
        containerStyle="bg-white max-w-[1000px]"
        activeKey={ACTIVE_KEY}
        key={ACTIVE_KEY}
      >
        <CustomModalHeader title="Choose package" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 p-4 z-0">
          {data?.packages &&
            (data?.packages as IPackage[])?.map((item) => (
              <PackageCard
                id={id}
                setLoading={setLoading}
                item={item}
                key={item._id}
              />
            ))}
        </div>
      </CustomModal>
    </>
  );
}
