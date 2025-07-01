import Card from "@/components/shared/Card";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import UserProfile from "./components/UserProfile";

export default function Profile() {
  return (
     <DashboardContainer>
          <section className="section-pb mt-5 xl:mt-10">
            <div className="w-full flex gap-10 mt-10">
              <Card className="w-full max-w-[450px]">
                <UserProfile />
                {/* <button className="btn btn-success mt-5" onClick={handleConnect}>
                  Connect To Bot
                </button> */}
              </Card>
              <Card className="w-full">
                <p className="mb-3 font-semibold ecj_fs-lg">Stay Notified</p>
                <div className="w-full flex flex-wrap gap-10 lg:gap-0">
                  <div className="w-full lg:w-3/6">
                    <p>Price Update Instant Notifications: Disabled</p>
                    {/* <button
                      className="btn btn-success mt-5"
                      onClick={handlePriceUpdate}
                    >
                      Enable
                    </button> */}
                  </div>
                  <div className="w-full lg:w-3/6">
                    <p>Two Factor Authentication (2FA): Disabled</p>
                    {/* <button
                      className="btn btn-success mt-5"
                      onClick={handle2FA}
                    >
                      Enable
                    </button> */}
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </DashboardContainer>
  )
}
