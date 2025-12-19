import PageBanner from "@/components/shared/PageBanner";
import bannerImg from "@/assets/banner/privacy-banner.png";
import Container from "@/components/wrapper/Container";
import { format } from "date-fns";
export default function PrivacyPolicy() {
  const currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() - 3); 
const updatedDate = currentDate;
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        textWrapperStyle="bg-slate-900/50"
        label="Privacy Policy"
        img={bannerImg}
        description="Learn how we collect, use, and protect your information. Your data security is our priority."
      />
      <div className="w-full section-top-speacing"></div>
      <section className="w-full section-inner-speacing">
        <Container className="!max-w-[1200px]">
          <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Last Updated: [{format(updatedDate, "dd MMM yyyy")}]</p>

            <h4 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h4>
            <ul className="list-disc ml-5 mb-4">
              <li>Name, email, mobile number</li>
              <li>Account details and domain URLs</li>
              <li>Payment information (handled by third-party gateways)</li>
              <li>Execution logs and usage statistics</li>
            </ul>

            <h4 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h4>
            <ul className="list-disc ml-5 mb-4">
              <li>Provide cron execution services</li>
              <li>Detect suspicious or harmful activity</li>
              <li>Improve performance, security, and user support</li>
              <li>Process payments and refunds</li>
            </ul>

            <h4 className="text-xl font-semibold mb-2">
              3. Prohibited or Suspicious Activity
            </h4>
            <p className="mb-4">
              Users are strictly prohibited from adding or executing URLs that
              involve hacking, phishing, malware distribution, DDoS activity, or
              any illegal or harmful content. If suspicious activity is
              detected, the account may be immediately deactivated without
              notice.
            </p>

            <h4 className="text-xl font-semibold mb-2">4. Data Protection</h4>
            <p className="mb-4">
              We follow standard security practices to protect user data, but no
              online service is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h4 className="text-xl font-semibold mb-2">5. Cookies</h4>
            <p className="mb-4">
              We may use cookies to manage login sessions, user preferences, and
              analytics.
            </p>

            <h4 className="text-xl font-semibold mb-2">
              6. Third-Party Sharing
            </h4>
            <p className="mb-4">
              We do not sell or share your personal data except with payment
              providers or legal authorities if required.
            </p>

            <h4 className="text-xl font-semibold mb-2">
              7. Account Deactivation
            </h4>
            <p className="mb-4">
              Accounts using suspicious or harmful URLs may be suspended or
              permanently deactivated based on the violation severity.
            </p>

            <h4 className="text-xl font-semibold mb-2">8. Contact Us</h4>
            <p className="mb-10">
              For questions regarding this policy, contact us at: [Support
              Email]
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
