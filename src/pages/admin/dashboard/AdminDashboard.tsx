import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useGetDashboardInfoQuery } from "@/redux/features/adminActions/adminActions";
import ErrorMessage from "@/components/shared/ErrorMessage";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { DashboardInfoCard } from "@/components/shared/Card";
import { GlobeIcon, UsersIcon } from "@/components/icons/Icons";
import { Link } from "react-router";

export default function AdminDashboard() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { data, isFetching, isError } = useGetDashboardInfoQuery({});
  if (!authUser) return <InvalidUser message="Invalid User" />;

  if (isFetching)
    return (
      <LoadingSpinner
        totalVisuals={3}
        containerClass="w-6 md:w-8 h-6 2xl:h-8"
        squareClasses={["bg-white", "bg-white", "bg-white"]}
      />
    );
  if (isError)
    return (
      <ErrorMessage
        key="DASHBOARD_ERROR_MESSAGE"
        msg="Error loading dashboard data"
      />
    );
  if (!authUser) return <InvalidUser message="Invalid User" />;
 const now = new Date().toISOString()
  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <div className="w-full mb-5 md:mb-10 lg:mb-14">
          <h3 className="text-center">
            Welcome <span className="font-semibold">{authUser.name}</span>
          </h3>
        </div>
        <h5 className="mb-4">Users analytics</h5>
        <div className="w-full flex flex-col sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 md:gap-7">
          <DashboardInfoCard
            label="Default Domains"
            value={data?.totalDefaultDomains || "0"}
            key="USER_NAME_CARD"
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
              <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>
          <DashboardInfoCard
            label="Manual Domains"
            value={data?.totalManualDomains || "0"}
            key="USER_CRONJOBS_DOMAIN_CARD"
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
              <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>

          <DashboardInfoCard
            label="Active Users"
            value={data?.activeUsers || "0"}
            key="USER_CRONJOBS_PACKAGE_CARD"
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
              <UsersIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>
          <DashboardInfoCard
            label="Deactive Users"
            value={data?.deactiveUsers || "0"}
            key="USER_CRONJOBS_PACKAGE_EXPIRY_CARD"
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
              <UsersIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>
          <DashboardInfoCard
            label="Offline Domains"
            value={data?.offlineDomains || "0"}
            key="USER_TOTAL_CRONJOBS_CARD"
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
              <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>
          <DashboardInfoCard
            label="Online Domains"
            value={data?.onlineDomains || "0"}
            key="USER_CRONJOB_WORK_DEFAULT_CRONJOBS_CARD"
            valueStyle={`text-green-600 font-semibold`}
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
              <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>
          <Link to={`/admin/users?expired=${now}`}>
            <DashboardInfoCard
              label="Total expired users"
              value={data?.totalExpiredUsers || "0"}
              key="USER_CRONJOB_EXPIRED_USERS_CARD"
              valueStyle={`text-red-500 font-semibold`}
            >
              <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
              </div>
            </DashboardInfoCard>
          </Link>
        </div>

        {/* 
        <h5 className="mb-4 mt-10 md:mt-20">Personal analytics</h5>
        <div className="w-full flex flex-col sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 md:gap-7">
          <DashboardInfoCard
            label="My manual domains"
            value={data?.myManualDomainsCount || "0"}
            key="PERSONAL_MANUAL_DOMAIN_CARD"
          >
            <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
              <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
            </div>
          </DashboardInfoCard>
        </div> */}
      </section>
      {/* <CronStatus /> */}
    </DashboardContainer>
  );
}
