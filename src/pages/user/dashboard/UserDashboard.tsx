import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { DashboardInfoCard } from "@/components/shared/Card";
import { BillIcon, ClockWorkIcon, CountDownBoxIcon, CreditCartIcon, GlobeIcon, RobotIcon, TelegramIcon, UserIcon } from "@/components/icons/Icons";

export default function UserDashboard() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if (!authUser) return <InvalidUser message="Invalid User" />;

    const toalCrons =
    authUser.defaultDomains?.length ||
    0 + (authUser.manualDomains ? authUser.manualDomains.length : 0);

  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <div className="w-full mb-5 md:mb-10 lg:mb-14">
          <h5 className="text-center">
            Welcome <span className="font-semibold">{authUser.name}</span>
          </h5>
        </div>

        {/* ====== user, domain and subsription info ===== */}
        {/* <BasicInfo /> */}

         <div className="w-full flex flex-col sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 md:gap-7">
              <DashboardInfoCard
                label="User Name"
                value={authUser.username}
                key="USER_NAME_CARD"
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                  <UserIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
              <DashboardInfoCard
                label="Domain"
                value={authUser.domain}
                key="USER_CRONJOBS_DOMAIN_CARD"
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                  <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
        
              <DashboardInfoCard
                label="Package"
                value={authUser?.subscription?.name}
                key="USER_CRONJOBS_PACKAGE_CARD"
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
                  <CreditCartIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
              <DashboardInfoCard
                label="Expired Time"
                value={format(authUser?.packageExpiresAt, "dd MMM yyyy")}
                key="USER_CRONJOBS_PACKAGE_EXPIRY_CARD"
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
                  <CountDownBoxIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
              <DashboardInfoCard
                label="Cron Jobs"
                value={toalCrons.toString()}
                key="USER_TOTAL_CRONJOBS_CARD"
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                  <RobotIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
              <DashboardInfoCard
                label="CronJob Work"
                value={
                  authUser.defaultDomains[0].status === "enabled" ? "ONLINE" : "OFFLINE"
                }
                key="USER_CRONJOB_WORK_DEFAULT_CRONJOBS_CARD"
                valueStyle={`${
                  authUser.defaultDomains[0].status === "enabled"
                    ? "text-green-600"
                    : "text-red-500"
                } font-semibold`}
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                  <ClockWorkIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
              <DashboardInfoCard
                label="Price Update"
                value={
                  !authUser?.manualDomains?.length ? "Empty" : authUser?.manualDomains[1]?.status === "enabled"
                    ? "ONLINE"
                    : "OFFLINE"
                }
                key="USER_PRCIE_UPDATE_DEFAULT_CRONJOBS_CARD"
                valueStyle={`${
                  authUser.defaultDomains[1]?.status === "enabled"
                    ? "text-green-600"
                    : "text-red-500"
                } font-semibold`}
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                  <BillIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
              <DashboardInfoCard
                label="Telegram"
                value={authUser.telegramConnected ? "Connected" : "Not Connected"}
                key="USER_TELEGRAM_CONNECTION_STATUS_CARD"
              >
                <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
                  <TelegramIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
                </div>
              </DashboardInfoCard>
            </div>  
      </section>
    </DashboardContainer>
  );
}
