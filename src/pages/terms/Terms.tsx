import PageBanner from "@/components/shared/PageBanner";
import bannerImg from "@/assets/banner/terms-banner.png";
import Container from "@/components/wrapper/Container";
import { format } from "date-fns";

export default function Terms() {
  const currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() - 3); 
const updatedDate = currentDate;
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        textWrapperStyle="bg-slate-700/50"
        label="Terms & Conditions"
        img={bannerImg}
        description="Our Terms and Conditions. Please read our terms and conditions carefully before using our services. Learn about your rights and responsibilities."
      />
      <div className="w-full section-top-speacing"></div>
      <section className="w-full section-inner-speacing">
        <Container className="!max-w-[1200px]">
          <div className="w-full mb-8 md:mb-10 lg:mb-14">
             {/* TERMS & CONDITIONS */}
            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <p className="mb-4">Last Updated: [{format(updatedDate, "dd MMM yyyy")}]</p>

            <h4 className="text-xl font-semibold mb-2">
              1. Service Description
            </h4>
            <p className="mb-4">
              We provide a cron execution service where users can submit URLs
              that run at specific time intervals based on their purchased plan.
            </p>

            <h4 className="text-xl font-semibold mb-2">
              2. User Responsibilities
            </h4>
            <ul className="list-disc ml-5 mb-4">
              <li>
                The URL must be legal and owned or authorized by the user.
              </li>
              <li>
                User must not run harmful, suspicious, or illegal scripts.
              </li>
              <li>Any violation may lead to immediate account deactivation.</li>
            </ul>

            <h4 className="text-xl font-semibold mb-2">3. Refund Policy</h4>
            <p className="mb-4">
              We offer a <strong>15-day money-back guarantee</strong>. If the
              user requests a refund within 15 days, they will receive a{" "}
              <strong>95% refund</strong> of the payment amount.
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>No refunds after 15 days.</li>
              <li>
                No refunds for accounts banned due to illegal or harmful
                activity.
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-2">
              4. Account Suspension & Deactivation
            </h4>
            <p className="mb-4">
              We may suspend or deactivate accounts using harmful URLs,
              exploiting the system, or violating terms. Suspended accounts may
              lose service access without refund.
            </p>

            <h4 className="text-xl font-semibold mb-2">
              5. Limitation of Liability
            </h4>
            <p className="mb-4">
              We are not responsible for damage caused by user-submitted URLs,
              system downtime, or external service failures beyond our control.
            </p>

            <h4 className="text-xl font-semibold mb-2">6. Changes to Terms</h4>
            <p className="mb-4">
              We may update these terms at any time. Continued use of the
              service indicates acceptance of the updated terms.
            </p>

            <p className="mt-10">
              © ExpressCronJob — All Rights Reserved.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
