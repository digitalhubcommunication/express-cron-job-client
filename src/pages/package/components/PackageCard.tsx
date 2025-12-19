import { Button } from "@/components/button/Button";
import { CheckIcon } from "@/components/icons/Icons";
import { RootState } from "@/redux/store";
import { TPackage } from "@/types/types";
import { isDateExpired } from "@/utils/utils";
import { useSelector } from "react-redux";
import { Link } from "react-router";

type Props = {
  cronPackage: TPackage;
  index: number;
};
export default function PackageCard({ cronPackage, index }: Props) {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const subscriptionId = authUser?.subscription?._id || "";
  const isActive =
    subscriptionId === cronPackage?._id &&
    !isDateExpired(authUser?.packageExpiresAt || "");
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
          {cronPackage?.name}
        </h5>
      </div>
      <div
        className={`w-full flex flex-col items-start gap-1 px-3 md:px-4 lg:px-5 xl:px-8 py-5 md:py-6 rounded-[10px] border ${
          index === 1
            ? "border-slate-200"
            : index === 2
            ? "border-slate-300  "
            : "border-slate-200"
        }`}
      >
        <h3 className="text-center w-full">
          <span className="font-semibold text-blue-600">${cronPackage?.price}</span>
          <span className="ecj_fs-base">/{cronPackage?.validity} Days</span>
        </h3>
        <p className="font-semibold  flex items-center gap-3 justify-start">
          <CheckIcon className="text-green-500 w-5 h-5" />
          <span>Order update in every {cronPackage?.intervalInMs / 1000}s.</span>
        </p>
        <p className="font-semibold  flex items-center gap-3 justify-start">
          <CheckIcon className="text-green-500 w-5 h-5" />
          <span>Extra {cronPackage?.manualCronLimit} manual cron job</span>
        </p>
        <p className="font-semibold  flex items-center gap-3 justify-start">
          <CheckIcon className="text-green-500 w-5 h-5" />
          <span>Full Domain Unlimited Executions</span>
        </p>
        <p className="font-semibold  flex items-center gap-3 justify-start">
          <CheckIcon className="text-green-500 w-5 h-5" />
          <span>Bot Notifications</span>
        </p>
        <p className="font-semibold  flex items-center gap-3 justify-start">
          <CheckIcon className="text-green-500 w-5 h-5" />
          <span>24/7 admin support</span>
        </p>
        <div className="w-full mt-5 px-5 flex items-center justify-center">
          <Link
            className={isActive ? "pointer-events-none" : ""}
            to={`/settings/initialize-transaction?packageId=${cronPackage?._id}`}
          >
            <Button
              // disabled={isActive}
              className={`ecj_fs-md !rounded-[10px] w-full ${
                isActive ? "!bg-green-500 !text-white" : "!bg-blue-500 !text-white"
              }`}
              label={isActive ? "Active" : "Get started"}
              cb={() => {}}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
