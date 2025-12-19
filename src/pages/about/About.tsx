import PageBanner from "@/components/shared/PageBanner";
import Container from "@/components/wrapper/Container";
import bannerImg from "@/assets/banner/about-banner.png"

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

      <Container>
        <section className="section-inner-speacing">
          <div className="w-full flex items-center flex-wrap-reverse">
            <div className="">
              <h5 className="mb-0.5 font-semibold">Our Mission</h5>
              <p className="mb-3">To simplify task automation for developers and businesses by providing a reliable, easy-to-use cron job scheduling service.</p>
              <h5 className="mb-0.5 font-semibold">Our Vision</h5>
              <p className="mb-3">To become the go-to platform for seamless, efficient, and precise automation that empowers teams to focus on what matters most.</p>
              <h5 className="mb-0.5 font-semibold">Our Goal</h5>
              <p className="mb-3">To provide a flexible, scalable, and user-friendly solution that ensures workflows run smoothly, on time, every time.</p>
            </div>
          </div>
          <div className="">

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
