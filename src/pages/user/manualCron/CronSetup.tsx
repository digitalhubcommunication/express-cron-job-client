import DashboardContainer from "@/components/wrapper/DashboardContainer";
import ManualCronActions from "./components/ManualCronActions";
import NoDomainMsg from "./components/NoDomainMsg";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Card from "@/components/shared/Card";
import ErrorMessage from "@/components/shared/ErrorMessage";
import PageLoading from "@/components/loading/PageLoading";
import { useState } from "react";
import DefaultDomainCard from "./components/DefaultDomainCard";

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
  const manualDomains = authUser?.manualDomains || [];
  const defaultDomains = authUser?.defaultDomains || [];

  return (
    <>
      <DashboardContainer >
        <section className="mt-5 xl:mt-10 mb-10">
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

          {activeTab === "Default" ? (
            <>
              {defaultDomains && defaultDomains?.length ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
                  {defaultDomains?.map((domain) => (
                    <DefaultDomainCard
                      domain={domain}
                      intervalInMs={authUser?.subscription?.intervalInMs || 0}
                    />
                  ))}
                </div>
              ) : (
                <NoDomainMsg />
              )}
            </>
          ) : (
            <>
              <ManualCronActions />
              {manualDomains && manualDomains?.length ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
                  {manualDomains?.map((domain) => (
                    <Card key={domain._id} className="">
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Name: </span>
                        <span>{domain.title}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">URL: </span>
                        <span>{domain.url}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Execution Time: </span>
                        <span>{domain?.executionTime}ms</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Status: </span>
                        <span className="capitalize">{domain.status}</span>
                      </p>
                      <div className="w-full flex gap-5 mt-3">
                        <button
                          className={`btn ${
                            "enabled" === domain.status
                              ? "btn-danger"
                              : "btn-success"
                          }`}
                        >
                          {"enabled" === domain.status ? "Disable" : "Enable"}
                        </button>
                        <button className="btn btn-danger">Delete</button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <NoDomainMsg />
              )}
            </>
          )}
        </section>
      </DashboardContainer>
    </>
  );
}
