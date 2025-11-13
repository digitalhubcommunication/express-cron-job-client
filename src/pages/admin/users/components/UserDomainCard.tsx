import Card from "@/components/shared/Card";
import { msToTimeString } from "@/utils/utils";
import EditDomain from "./EditDomain";

type DomainStatus = "enabled" | "disabled";
type TDomainType = "manual" | "default";
export type ITypeOfDomain = {
     title: string;
    _id: string;
    executeInMs: number;
    status: DomainStatus;
    url: string;
    domainType: TDomainType;
}

type Props = {
  domain: ITypeOfDomain;
  userId:string;
};

export default function UserDomainCard({
  domain,
  userId,
}: Props) {
    const {  title, executeInMs, status, url} = domain;
  return (
    <Card className={`flex flex-col gap-2 relative`}>
      <EditDomain userId={userId} domain={domain} />
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
          <span
            className={`capitalize ${
              status === "enabled" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </span>
        </div>
        {/* <button disabled={deleting} onClick={handleClick}>
          {deleting ? (
            <LoadingSpinner
              totalVisuals={3}
              containerClass="w-3 md:w-4 h-3 2xl:h-4"
            />
          ) : (
            <TrashIcon className="w-5 h-5 text-red-500" />
          )}
        </button> */}
      </div>
    </Card>
  );
}
