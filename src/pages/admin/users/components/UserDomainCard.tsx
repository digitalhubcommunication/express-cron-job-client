import { TrashIcon } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Card from "@/components/shared/Card";
import ToggleButton from "@/pages/shared/ToggleButton";
import { useUpdateAdminManualDomainMutation } from "@/redux/features/adminActions/adminActions";
import { deleteManualDomain, setAuthUser, setManualDomainStatus } from "@/redux/features/auth/AuthSlice";
import {
  useRemoveManualDomainMutation,
  useUpdateManualDomainMutation,
} from "@/redux/features/userAction/userActionApi";
import { RootState } from "@/redux/store";
import { TManualDomain } from "@/types/types";
import { msToTimeString } from "@/utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

type DomainStatus = "enabled" | "disabled";

export default function UserDomainCard({
  title,
  _id,
  executeInMs,
  status,
  url,
}: TManualDomain) {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const [changeManualDomainStatus, { isLoading }] =
    useUpdateAdminManualDomainMutation();

  const [removeUrl, { isLoading: deleting }] = useRemoveManualDomainMutation();

  // handlers
  const updateDefaultDomain = async (
    id: string,
    updateStatus: DomainStatus
  ) => {
      const agree = confirm(`Are you sure you want to ${updateStatus==="enabled" ? "enable":"disable"} this domain?`)
    if(!agree)return;


    try {
      const res = await changeManualDomainStatus({
        id,
        data: { status: updateStatus },
      }).unwrap();
      if (res?.success) {
        toast.success(res.message || "Success");
        dispatch(setManualDomainStatus({id, status:updateStatus}))
      } else {
        throw new Error(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log(error);
    }
  };

  const handleClick = async () => {
    if (!authUser) return;
    const agree = confirm("Are you sure you want to delete?");
    if (!agree) return;
    try {
      const res = await removeUrl(_id).unwrap();
      if (res.success) {
        const updatedUser = { ...authUser };
        updatedUser.manualDomains = authUser.manualDomains?.filter(
          (domain) => domain._id !== _id
        );
        dispatch(setAuthUser(updatedUser));
        dispatch(deleteManualDomain(_id));
        toast.success("Deleted successfully");
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log(error);
    }
  };

  return (
    <Card className={`flex flex-col gap-2 relative`}>
      <p className="flex items-center gap-2">
        <span className="font-semibold">Title: </span>
        <span>{title}</span>
      </p>
      <p className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold">URL: </span>
        <span className="text-wrap">{url}</span>
      </p>
      <p className="flex items-center gap-2">
        <span className="font-semibold">Execution Time: </span>
        <span>{executeInMs ? msToTimeString(executeInMs) : "0 ms"}</span>
      </p>
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Status: </span>
          {isLoading ? (
            <LoadingSpinner
              totalVisuals={3}
              containerClass="w-3 md:w-4 h-3 2xl:h-4 ml-3"
            />
          ) : (
            <ToggleButton
              isActive={status === "enabled"}
              key={`DEFAULT_DOMAIN_UPDATE_BTN_${_id}`}
              label={status === "enabled" ? "Active" : "Deactive"}
              onToggle={() =>
                updateDefaultDomain(
                  _id,
                  status === "enabled" ? "disabled" : "enabled"
                )
              }
            />
          )}
        </div>
        <button disabled={deleting} onClick={handleClick}>
          {deleting ? (
            <LoadingSpinner
              totalVisuals={3}
              containerClass="w-3 md:w-4 h-3 2xl:h-4"
            />
          ) : (
            <TrashIcon className="w-5 h-5 text-red-500" />
          )}
        </button>
      </div>
    </Card>
  );
}

