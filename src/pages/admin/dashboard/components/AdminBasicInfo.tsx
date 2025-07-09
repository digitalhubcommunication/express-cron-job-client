import { GlobeIcon, UsersIcon } from "@/components/icons/Icons";
import { DashboardInfoCard } from "@/components/shared/Card";
import InvalidUser from "@/components/shared/InvalidUser";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AdminBasicInfo() {
  const { authUser } = useSelector((state: RootState) => state.auth);

  if (!authUser) return <InvalidUser message="Invalid User" />;

  return (
    <div className="w-full flex flex-col sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 md:gap-7">
      <DashboardInfoCard
        label="Default Domains"
        value={20}
        key="USER_NAME_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </DashboardInfoCard>
      <DashboardInfoCard
        label="Manual Domain"
        value={6}
        key="USER_CRONJOBS_DOMAIN_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </DashboardInfoCard>

      <DashboardInfoCard
        label="Active Users"
        value={18}
        key="USER_CRONJOBS_PACKAGE_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
          <UsersIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </DashboardInfoCard>
      <DashboardInfoCard
        label="Deactive Users"
        value={2}
        key="USER_CRONJOBS_PACKAGE_EXPIRY_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
          <UsersIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </DashboardInfoCard>
      <DashboardInfoCard
        label="Offline Domains"
        value={10}
        key="USER_TOTAL_CRONJOBS_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </DashboardInfoCard>
      <DashboardInfoCard
        label="Online Domains"
        value={16}
        key="USER_CRONJOB_WORK_DEFAULT_CRONJOBS_CARD"
        valueStyle={`${
          authUser.defaultDomains[0].status === "enabled"
            ? "text-green-600"
            : "text-red-500"
        } font-semibold`}
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </DashboardInfoCard>
    </div>
  );
}
