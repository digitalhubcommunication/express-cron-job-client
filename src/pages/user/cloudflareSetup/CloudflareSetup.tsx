import DashboardContainer from "@/components/wrapper/DashboardContainer";
import setup_guide_1 from "@/assets/cloudflare/cloudflare_guide-1.png";
import setup_guide_2 from "@/assets/cloudflare/cloudflare_guide-2.png";
import setup_guide_3 from "@/assets/cloudflare/cloudflare_guide-3.png";
import setup_guide_4 from "@/assets/cloudflare/cloudflare_guide-4.png";

export default function CloudflareSetup() {
  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <h6 className="text-center mb-5">
          How to Whitelist Our IP Addresses in Cloudflare
        </h6>
        <div className="w-full md:border border-slate-400 md:p-5 rounded-[10px] lg:p-6 xl:p-7">
          <p className="mb-3">
            Cloudflare can sometimes block our servers from accessing and
            updating orders. Follow the steps below to whitelist IP addresses in
            Cloudflare.
          </p>

          <p className="font-semibold mb-3">Step-by-Step Guide:</p>
          <ul className="w-full flex flex-col gap-2 list-disc ml-5">
            <li className="">
              <p className="font-semibold ">
                Log in to Your Cloudflare Account:
              </p>
              <p>
                Visit the Cloudflare website and log in using your email and
                password.
              </p>
            </li>
            <li>
              <p className="font-semibold">Select Your Website:</p>
              <p>
                After logging in, click on the domain name you want to manage.
              </p>
            </li>
            <li>
              <p className="font-semibold">Select Your Website:</p>
              <p>
                After logging in, click on the domain name you want to manage.
              </p>
            </li>
            <li>
              <p className="font-semibold">Navigate to Security:</p>
              <p>On the left-hand menu, click "Security" and then "WAF."</p>
            </li>
            <li>
              <p className="font-semibold">Create a Custom Rule:</p>
              <p>
                Under the WAF section, click "Custom Rules" and select "Create
                Rule."
              </p>
            </li>
            <li>
              <p className="font-semibold">Add IP Addresses:</p>
              <p>
                Enter the ExpressCronJob IP addresses as Incoming IP Source
                conditions. Use "Or" between each IP. Select "Skip" as the
                action and check the box to skip "All remaining custom rules."
              </p>
            </li>
            <li>
              <p className="font-semibold">Deploy the Rule:</p>
              <p>
                Click "Deploy" to save the changes. Ensure all current IP
                addresses are added.
              </p>
            </li>
          </ul>

          <div className="w-full my-10 xl:my-20 flex flex-col gap-20">
            <img src={setup_guide_1} width={1000} height={700} alt="Cloudflare setup 1" className="w-full max-w-[950px] h-auto" />
            <img src={setup_guide_2} width={1000} height={700} alt="Cloudflare setup 2" className="w-full max-w-[950px] h-auto" />
            <img src={setup_guide_3} width={1000} height={700} alt="Cloudflare setup 3" className="w-full max-w-[950px] h-auto" />
            <img src={setup_guide_4} width={1000} height={700} alt="Cloudflare setup 4"  className="w-full max-w-[950px] h-auto" />
          </div>

          <p className="mt-10 text-center">
            For further assistance, contact our support team or refer to the
            Cloudflare help documentation.
          </p>
        </div>
      </section>
    </DashboardContainer>
  );
}
