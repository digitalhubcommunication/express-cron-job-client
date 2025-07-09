import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AdminBasicInfo from "./components/AdminBasicInfo";

export default function AdminDashboard() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if (!authUser) return <InvalidUser message="Invalid User" />;

  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <div className="w-full mb-5 md:mb-10 lg:mb-14">
          <h3 className="text-center">
            Welcome <span className="font-semibold">{authUser.name}</span>
          </h3>
        </div>
        <AdminBasicInfo />
      </section>
      {/* <CronStatus /> */}
    </DashboardContainer>
  );
}
