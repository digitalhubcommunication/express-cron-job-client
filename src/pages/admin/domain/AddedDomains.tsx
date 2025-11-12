import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import AddNewCron from "./AddNewCron";
import AdminManualCronCard from "./AdminManualCronCard";
import NoDomainMsg from "@/pages/user/manualCron/components/NoDomainMsg";

export default function AddedDomains() {
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isUserLoading)
    return (
      <LoadingSpinner
        totalVisuals={3}
        containerClass="w-6 md:w-8 h-6 2xl:h-8"
        squareClasses={["bg-white", "bg-white", "bg-white"]}
      />
    );

  if (!authUser) return <InvalidUser message="Invalid User" />;

  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <div className="w-full mb-5 md:mb-10 lg:mb-14">
          <h3 className="text-center">
            Welcome <span className="font-semibold">{authUser.name}</span>
          </h3>
        </div>
        <h5 className="font-semibold mb-4">Default Domain</h5>
        <div className="w-full">
          <p>{authUser.domain}</p>
        </div>

        <h5 className="font-semibold mb-4 mt-10 md:mt-20">Manual Domains</h5>
        <div className="w-full">
                      <AddNewCron />
                        {authUser?.manualDomains?.length && authUser?.manualDomains ? (
                          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
                            {authUser?.manualDomains?.map((domain) => (
                             <AdminManualCronCard key={domain?._id}  {...domain} />
                            ))}
                          </div>
                        ) : (
                          <NoDomainMsg />
                        )}
        </div>
      </section>
      {/* <CronStatus /> */}
    </DashboardContainer>
  );
}
