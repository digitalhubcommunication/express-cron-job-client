import { TrashIcon } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Card from "@/components/shared/Card";
import ToggleButton from "@/pages/shared/ToggleButton";
import { setAuthUser } from "@/redux/features/auth/AuthSlice";
import {
  useRemoveManualDomainMutation,
  useUpdateDefaultDomainMutation,
} from "@/redux/features/userAction/userActionApi";
import { RootState } from "@/redux/store";
import { TManualDomain } from "@/types/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

type DomainStatus = "enabled" | "disabled";

export default function ManualDomainCard({
  title,
  _id,
  executeInMs,
  status: domainStatus,
  url,
}: TManualDomain) {
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);
  const { authUser } = useSelector((state: RootState) => state.auth);
  const [changeDefaultDomainStatus, { isLoading }] =
    useUpdateDefaultDomainMutation();

  const [removeUrl, { isLoading: deleting }] = useRemoveManualDomainMutation();
  const [status, setStatus] = useState<DomainStatus>(domainStatus);

  // handlers
  const updateDefaultDomain = async (
    id: string,
    updateStatus: DomainStatus
  ) => {
    try {
      const res = await changeDefaultDomainStatus({
        id,
        data: { status: updateStatus },
      }).unwrap();
      if (res?.success) {
        toast.success(res.message || "Success");
        setStatus(updateStatus);
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
        setDeleted(true);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log(error);
    }
  };

  if (deleted) return <></>;

  return (
    <Card className={`flex flex-col gap-2 relative max-w-[500px]`}>
      <p className="flex items-center gap-2">
        <span className="font-semibold">Title: </span>
        <span>{title}</span>
      </p>
      <p className="flex items-center gap-2">
        <span className="font-semibold">URL: </span>
        <span className="text-wrap">{url}</span>
      </p>
      <p className="flex items-center gap-2">
        <span className="font-semibold">Execution Time: </span>
        <span>{executeInMs ? executeInMs / 1000 / 60 : 30} Minutes</span>
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
