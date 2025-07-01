import DashboardContainer from "@/components/wrapper/DashboardContainer";
import dhrufusion_setup from "@/assets/dhrufusion/dhru-fusion-setting.jpg";

export default function DhruFusionSetup() {
  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <h6 className="text-center mb-5">Setup Instructions</h6>
        <div className="w-full md:border border-slate-400 md:p-5 rounded-[10px] lg:p-6 xl:p-7">
          <p className="mb-3">
            To enable API automation features to run, make sure you set up a
            cronjob to run every (5 seconds, 10 seconds). Create the following
            CronJob using fastcronjob.com. How to set up a Cronjob in the panel
          </p>

          <p className="font-semibold mb-3">
            Set up separate cron jobs as listed below:
          </p>
          <ul className="w-full flex flex-col gap-2 list-disc ml-5">
            <li className="font-semibold">API Settings</li>
            <li className="font-semibold">Cron Settings</li>
            <li className="font-semibold">
              Separate Cron For Send and Get - OFF
            </li>
            <li className="font-semibold">SetCronJob.com (Recommended)</li>
            <li className="font-semibold">Save</li>
          </ul>
          <p>After clicking "Save," the Cronjob will be automatically added to all the services on your domain, and your Fastcronjob will work.</p>

          <div className="w-full my-10 xl:my-20 flex flex-col gap-20">
            <img src={dhrufusion_setup} width={1000} height={700} alt="Dhru Fusion Setup" className="w-full max-w-[1200px] mx-auto h-auto" />
          </div>

          <p className="mt-10 text-center">
            For further assistance, contact our support team.
          </p>
        </div>
      </section>
    </DashboardContainer>
  );
}
