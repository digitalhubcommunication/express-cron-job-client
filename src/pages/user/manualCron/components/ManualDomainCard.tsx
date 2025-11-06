import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Card from "@/components/shared/Card";
import ToggleButton from "@/pages/shared/ToggleButton";
import { useUpdateDefaultDomainMutation } from "@/redux/features/userAction/userActionApi";
import { TDomain } from "@/types/types";
import { useState } from "react";
import { toast } from "react-toastify";

type DomainStatus = "enabled" | "disabled";

type Props = {
  domain: TDomain;
  intervalInMs: number;
};

export default function ManualDomainCard({ domain, intervalInMs }: Props) {
  const [changeDefaultDomainStatus, { isLoading }] =
    useUpdateDefaultDomainMutation();
  const [status, setStatus] = useState<DomainStatus>(domain.status);

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

  return (
    <Card key={domain._id} className="flex flex-col gap-2">
      <p className="flex items-center gap-2">
        <span className="font-semibold">Name: </span>
        <span>Default Cron</span>
      </p>
      <p className="flex items-center gap-2">
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
            isActive={status === "enabled"}
            key={`DEFAULT_DOMAIN_UPDATE_BTN_${domain._id}`}
            label={status === "enabled" ? "Active" : "Deactive"}
            onToggle={() =>
              updateDefaultDomain(
                domain._id,
                status === "enabled" ? "disabled" : "enabled"
              )
            }
          />
        )}
      </div>
    </Card>
  );
}
