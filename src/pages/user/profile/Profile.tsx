import Card from "@/components/shared/Card";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import UserProfile from "./components/UserProfileInfo";
import ProfileForm from "./components/ProfileForm";

export default function Profile() {
  return (
     <DashboardContainer>
          <section className="section-pb mt-5 xl:mt-10">
            <div className="w-full flex gap-20 flex-col md:flex-row md:gap-5 lg:gap-10 mt-10">
              <Card className="w-full max-w-[450px]">
                <UserProfile />
              </Card>
              <Card className="w-full">
                <p className="mb-3 text-center font-semibold ecj_fs-lg">Update Profile Information</p>
                <ProfileForm />
              </Card>
            </div>
          </section>
        </DashboardContainer>
  )
}
