import Card from "@/components/shared/Card";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ManualDomainLists() {
  const { manualDomains } = useSelector((state: RootState) => state.auth);

  if (!manualDomains || !manualDomains?.length) return <></>;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
      {manualDomains?.map((domain) => (
        <Card key={domain._id} className="">
          <p className="flex items-center gap-2"><span className="font-semibold">Name: </span><span>{domain.title}</span></p>
          <p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span>{domain.url}</span></p>
          <p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>{domain.executionTime}ms</span></p>
          <p className="flex items-center gap-2"><span className="font-semibold">Status: </span><span className="capitalize">{domain.status}</span></p>
          <div className="w-full flex gap-5 mt-3">
            <button className={`btn ${"enabled"===domain.status? 'btn-danger':'btn-success'}`}>{"enabled"===domain.status? 'Disable':'Enable'}</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </Card>
      ))}
    </div>
  );
}
