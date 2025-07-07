import PageBanner from "@/components/shared/PageBanner";
import Container from "@/components/wrapper/Container";
import bannerImg from "@/assets/banner/about-banner.png";
import { distributors } from "@/data/DemoData";
import DistributorCard from "./components/DistributorCard";

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
                <h3 className="text-center">Our Distributors and Resellers</h3>
      
                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] mt-7 lg:mt-10  gap-6 md:gap-8 lg:gap-10">
                  {distributors.map((item) => (
                    <DistributorCard key={item._id} distributor={item} />
                  ))}
                </div>
              </section>
            </Container>
      <Container>
        <section className="section-inner-speacing">
          {/* <h3 className="text-center">Our Available Packages</h3> */}
          <div className="w-full flex items-center">
            
          </div>
        </section>
      </Container>
    </div>
  );
}
