import { PlusIcon, TrashIcon } from "@/components/icons/Icons";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ManualCronActions() {
    const { manualDomains } = useSelector((state: RootState) => state.auth);

  return (
    <div className="w-full flex items-center gap-5 flex-wrap md:flex-nowrap justify-between">
        <h6 className="whitespace-nowrap">Total Manual Cron: {manualDomains && manualDomains?.length ? manualDomains?.length:0}</h6>
      <div className="flex items-center gap-5 flex-wrap md:justify-end">
        <button className="btn btn-danger flex items-center gap-2">
          <TrashIcon />
          <span>Delete All</span>
        </button>
        <button className="btn btn-success !pl-[14px] flex items-center gap-2">
          <PlusIcon /> <span>Add New</span>
        </button>
        <button className="btn btn-warning !pl-[14px] flex items-center gap-2">
          <PlusIcon /> <span>Bulk Add</span>
        </button>
      </div>
    </div>
  );
}
