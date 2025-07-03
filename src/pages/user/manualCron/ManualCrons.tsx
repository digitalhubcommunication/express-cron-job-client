import DashboardContainer from "@/components/wrapper/DashboardContainer";
import ManualCronActions from "./components/ManualCronActions";
import NoDomainMsg from "./components/NoDomainMsg";
import ManualDomainLists from "./components/ManualDomainLists";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ManualCrons() {
  const { manualDomains } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <DashboardContainer >
        <section className="mt-5 xl:mt-10 mb-10">
          <div className="w-full mb-5 md:mb-10 lg:mb-14">
            <h5 className="text-center">Manual Cronjobs</h5>
          </div>
          <ManualCronActions />
          {manualDomains && manualDomains?.length ? (
            <ManualDomainLists />
          ) : (
            <NoDomainMsg />
          )}
        </section>
      </DashboardContainer>
    </>
  );
}
