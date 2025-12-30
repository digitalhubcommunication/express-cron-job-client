import PageBanner from "@/components/shared/PageBanner";
import Container from "@/components/wrapper/Container";
import bannerImg from "@/assets/banner/about-banner.png"
import siteOwner from "@/assets/images/site-owner.png"

export default function About() {
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        textWrapperStyle="bg-slate-900/50"
        label="About Us"
        img={bannerImg}
        description="Discover Our Story. Learn about who we are, what we do, and how we're committed to supporting you on your cronjob automation journey."
      />

      <Container className="section-top-speacing">
        <section className="section-inner-speacing">
          <div className="w-full flex gap-10 md:gap-14 lg:gap-20 items-center justify-between flex-col lg:flex-row">
            <div className="grow w-full xl:w-4/6 lg:max-w-[700px]">
              <h5 className="mb-1 font-semibold">Our Mission</h5>
              <p className="mb-4">To simplify task automation for developers and businesses by providing a reliable and easy-to-use cron job scheduling service. We aim to remove the complexity of managing routine tasks, allowing teams to focus on innovation and productivity.</p>
              <h5 className="mb-1 font-semibold">Our Vision</h5>
              <p className="mb-4">To become the go-to platform for seamless and efficient automation, helping teams streamline workflows, reduce errors, and operate more effectively. We envision a world where automation is simple, accessible, and trusted by every business.</p>
              <h5 className="mb-1 font-semibold">Our Goal</h5>
              <p className="mb-4">To provide a flexible, scalable, and user-friendly solution that ensures tasks run smoothly and on schedule. Our focus is on reliability, continuous improvement, and empowering users to manage workflows effortlessly.</p>
            </div>
            <div className="w-full xl:w-2/6 max-w-[600px] rounded-md lg:rounded-lg overflow-hidden">
              <img className="w-full h-auto" src={siteOwner} alt="Site owner" />
            </div>
          </div>

        </section>
      </Container>

      <Container>
        <section className="section-inner-speacing">
          {/* <h3 className="text-center">Our Available Packages</h3> */}
          <div className="w-full flex items-center"></div>
        </section>
      </Container>
    </div>
  );
}
