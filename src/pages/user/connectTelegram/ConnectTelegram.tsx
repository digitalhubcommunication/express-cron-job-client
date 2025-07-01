import Card from "@/components/shared/Card";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { toast } from "react-toastify";

export default function ConnectTelegram() {

  // handlers
  const handleConnect = () => {
     toast.warn("API integration in progress")
  };

  const handlePriceUpdate=()=>{
    toast.warn("API integration in progress")
  }

  const handle2FA=()=>{
    toast.warn("API integration in progress")
  }
  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <h6 className="text-center mb-5">
          Connect Your Telegram Bot for(2FA) & Alerts
        </h6>
        <div className="w-full flex flex-col gap-10 mt-10 max-w-[900px]">
          <Card className="w-full">
            <p className="mb-3 font-semibold ecj_fs-lg">Connect Telegram</p>
            <p>
              "Secure & Stay Updated: Telegram Bot Integration for (2FA) and
              Notifications"
            </p>
            <button className="btn btn-success mt-5" onClick={handleConnect}>
              Connect To Bot
            </button>
          </Card>
          <Card className="w-full">
            <p className="mb-3 font-semibold ecj_fs-lg">Stay Notified</p>
            <div className="w-full flex flex-wrap gap-10 lg:gap-0">
              <div className="w-full lg:w-3/6">
                <p>Price Update Instant Notifications: Disabled</p>
                <button
                  className="btn btn-success mt-5"
                  onClick={handlePriceUpdate}
                >
                  Enable
                </button>
              </div>
              <div className="w-full lg:w-3/6">
                <p>Two Factor Authentication (2FA): Disabled</p>
                <button
                  className="btn btn-success mt-5"
                  onClick={handle2FA}
                >
                  Enable
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </DashboardContainer>
  );
}
