import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import BasicInfo from "./components/BasicInfo";
import CronStatus from "./components/CronStatus";

export default function UserDashboard() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if (!authUser) return <InvalidUser message="Invalid User" />;
  
  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <div className="w-full mb-5">
        <h6 className="text-center">Welcome <span className="font-semibold">{authUser.name}</span></h6>
      </div>

      {/* ====== user, domain and subsription info ===== */}
      <BasicInfo />
      </section>
      <CronStatus />
    </DashboardContainer>
  );
}
