import { Button } from "@/components/button/Button";
import { TPackage } from "@/types/types";
import { Link } from "react-router";
import { toast } from "react-toastify";

type Props = {
  cronPackage: TPackage;
  index: number;
};
export default function PackageCard({ cronPackage, index }: Props) {
    
  const handlePurchase = () => {
    // TODO:
    toast.warn("API integration in progress");
  };

  return (
    <div
      className={`hover:shadow-xl duration-300 rounded-[10px] overflow-hidden ${
        index === 1
          ? "bg-blue-50/70 hover:bg-blue-50"
          : index === 2
          ? " bg-blue-100/70 hover:bg-blue-100"
          : "bg-blue-50/40 hover:bg-blue-50/80"
      }`}
    >
      <div className="w-full bg-slate-800 text-white py-2.5">
        <h5 className="uppercase font-semibold text-center">
          {cronPackage.name}
        </h5>
      </div>
      <div
        className={`w-full flex flex-col items-center gap-1 px-2 py-5 md:py-6 rounded-[10px] border ${
          index === 1
            ? "border-slate-200"
            : index === 2
            ? "border-slate-300  "
            : "border-slate-200"
        }`}
      >
        <h3>
          <span className="font-semibold">${cronPackage.price}</span>
          <span className="ecj_fs-base">/per month</span>
        </h3>
        <p className="font-semibold">
          Order update in every {cronPackage.intervalInMs / 1000}s.
        </p>
        <p className="font-semibold">
          Extra {cronPackage.manualCronLimit} manual cron job
        </p>
        <p className="font-semibold">24/7 admin support</p>
        <div className="w-full mt-5 px-5 flex items-center justify-center">
          <Link to={`/settings/initialize-transaction?packageId=${cronPackage._id}`} >
          <Button
            className="ecj_fs-md !rounded-[10px] w-full "
            label="Get started"
            cb={()=>{}}
            />
            </Link>
        </div>
      </div>
    </div>
  );
}
