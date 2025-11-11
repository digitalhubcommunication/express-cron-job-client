import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import ErrorMessage from "@/components/shared/ErrorMessage";
import PageLoading from "@/components/loading/PageLoading";
import { useState } from "react";
import ManualCrons from "./components/ManualCrons";
import DefaultCrons from "./components/DefaultCrons";
import { isDateExpired } from "@/utils/utils";

type TActiveTab = "Default" | "Manual";

export default function CronSetup() {
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );

  const [activeTab, setActiveTab] = useState<TActiveTab>("Default");

  if (isUserLoading) return <PageLoading />;

  if (!authUser)
    return (
      <ErrorMessage key="MANUAL_DOMAIN_PAGE_ERROR_PAGE" msg="Invalid user" />
    ); 

  return (
    <>
      <DashboardContainer >
        <section className="mt-5 xl:mt-10 mb-10">
          {
             isDateExpired(authUser?.packageExpiresAt || '') && <div className="mb-5 md:mb-10 lg:mb-14 bg-red-500 rounded-md text-white py-3 px-3 w-auto">
            <h5 className="text-center">Package expired. Please purchase again. All automated tasks have stopped.</h5>
          </div>
          }
          
          <div className="w-full mb-5 md:mb-10 lg:mb-14">
            <h5 className="text-center">{activeTab} Cronjobs</h5>
          </div>


          <div className="w-full mb-5 md:mb-10 lg:mb-14 flex items-center gap-2">
            <button
              className={`btn ${activeTab === "Default" && "btn-success"}`}
              onClick={() => activeTab !== "Default" && setActiveTab("Default")}
            >
              Default
            </button>
            <button
              className={`btn ${activeTab === "Manual" && "btn-success"}`}
              onClick={() => activeTab !== "Manual" && setActiveTab("Manual")}
            >
              Manual
            </button>
          </div>

          {activeTab === "Default" ? <DefaultCrons /> : <ManualCrons />}
        </section>
      </DashboardContainer>
    </>
  );
}
