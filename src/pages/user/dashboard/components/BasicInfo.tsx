import {
  BillIcon,
  ClockWorkIcon,
  CountDownBoxIcon,
  CreditCartIcon,
  GlobeIcon,
  RobotIcon,
  TelegramIcon,
  UserIcon,
} from "@/components/icons/Icons";
import InvalidUser from "@/components/shared/InvalidUser";
import { RootState } from "@/redux/store";
import { format } from "date-fns";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

type CardProps = {
  children: ReactNode;
  label: string;
  value: string;
  valueStyle?: string;
};

const Card = ({ children, label, value, valueStyle = "" }: CardProps) => {
  return (
    <div className="w-full border  border-slate-300 shadow flex justify-start items-center gap-5 rounded-[10px] p-2 md:p-3">
      {children}
      <div className="grow flex flex-col justify-center">
        <h6 className=" ecj_fs-md font-semibold mb-0.5">{label}</h6>
        <p className={`ecj_fs-md text-black dark:text-white ${valueStyle}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default function BasicInfo() {
  const { authUser } = useSelector((state: RootState) => state.auth);

  if (!authUser) return <InvalidUser message="Invalid User" />;

  const toalCrons =
    authUser.defaultDomains?.length ||
    0 + (authUser.manualDomains ? authUser.manualDomains.length : 0);
  const packageType =
    authUser.subscription?.type === "trial"
      ? "2-days free trial"
      : authUser.subscription?.type;
  const packageExpired = format(authUser.packageExpiresAt, "dd MMM yyyy");
  {
    /* ======= domain and package info ======= */
  }
  return (
    <div className="w-full flex flex-col sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 md:gap-7">
      <Card label="User Name" value={authUser.username} key="USER_NAME_CARD">
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <UserIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </Card>
      <Card
        label="Domain"
        value={authUser.domain}
        key="USER_CRONJOBS_DOMAIN_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <GlobeIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </Card>

      <Card
        label="Package"
        value={packageType}
        key="USER_CRONJOBS_PACKAGE_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
          <CreditCartIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </Card>
      <Card
        label="Expired Time"
        value={packageExpired}
        key="USER_CRONJOBS_PACKAGE_EXPIRY_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500">
          <CountDownBoxIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </Card>
      <Card
        label="Cron Jobs"
        value={toalCrons.toString()}
        key="USER_TOTAL_CRONJOBS_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <RobotIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </Card>
      <Card
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
      </Card>
      <Card
        label="Price Update"
        value={
          authUser.defaultDomains[1]?.status === "enabled"
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
      </Card>
      <Card
        label="Telegram"
        value={authUser.telegramConnected ? "Connected" : "Not Connected"}
        key="USER_TELEGRAM_CONNECTION_STATUS_CARD"
      >
        <div className="w-auto p-3 rounded-[5px] border border-slate-300 bg-blue-500 ">
          <TelegramIcon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-[30px] 2xl:h-[30px] text-white" />
        </div>
      </Card>
    </div>
  );
}
