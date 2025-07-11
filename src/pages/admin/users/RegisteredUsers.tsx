import DashboardContainer from "@/components/wrapper/DashboardContainer";
import UsersLists from "./components/UsersLists";

export default function RegisteredUsers() {
  return (
    <DashboardContainer className="pt-[110px]">
      <section className="section-pb">
        <div className="w-full mb-5">
          <h3 className="text-center">User lists</h3>
        </div>
          <UsersLists />
      </section>
    </DashboardContainer>
  );
}
