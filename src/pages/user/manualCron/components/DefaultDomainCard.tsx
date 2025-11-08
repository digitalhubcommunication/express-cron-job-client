import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Card from "@/components/shared/Card";
import ToggleButton from "@/pages/shared/ToggleButton";
import { setDefaultDomainStatus } from "@/redux/features/auth/AuthSlice";
import { useUpdateDefaultDomainMutation } from "@/redux/features/userAction/userActionApi";
import { TDomain } from "@/types/types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type DomainStatus = "enabled" | "disabled";

type Props = {
  domain: TDomain;
  intervalInMs: number;
};

export default function DefaultDomainCard({ domain, intervalInMs }: Props) {

  // hooks
  const dispatch = useDispatch()
  const [changeDefaultDomainStatus, { isLoading }] =
    useUpdateDefaultDomainMutation();

  // handlers
  const updateDefaultDomain = async (
    id: string,
    updateStatus: DomainStatus
  ) => {

    const agree = confirm(`Are you sure you want to ${updateStatus==="enabled" ? "enable":"disable"} this domain?`)
    if(!agree)return;

    try {
      const res = await changeDefaultDomainStatus({
        id,
        data: { status: updateStatus },
      }).unwrap();
      if (res?.success) {
        toast.success(res.message || "Success");
        dispatch(setDefaultDomainStatus({id, status:updateStatus}))  
      } else {
        throw new Error(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log(error);
    }
  };

  


  return (
    <Card key={domain._id} className="flex flex-col gap-2 max-w-[700px]">
      <p className="flex items-center gap-2">
        <span className="font-semibold">Name: </span>
        <span>Default Cron</span>
      </p>
      <p className="flex items-start gap-2">
        <span className="font-semibold">URL: </span>
        <span>{domain.url}</span>
      </p>
      <p className="flex items-center gap-2">
        <span className="font-semibold">Execution Time: </span>
        <span>{intervalInMs ? intervalInMs / 1000 : 3}s</span>
      </p>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Status: </span>
        {isLoading ? (
          <LoadingSpinner
            totalVisuals={3}
            containerClass="w-3 md:w-4 h-3 2xl:h-4 ml-3"
          />
        ) : (
          <ToggleButton
            isActive={domain.status === "enabled"}
            key={`DEFAULT_DOMAIN_UPDATE_BTN_${domain._id}`}
            label={domain.status === "enabled" ? "Active" : "Deactive"}
            onToggle={() =>
              updateDefaultDomain(
                domain._id,
                domain.status === "enabled" ? "disabled" : "enabled"
              )
            }
          />
        )}
      </div>
    </Card>
  );
}
