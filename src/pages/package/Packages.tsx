import Container from "@/components/wrapper/Container";
import {distributors } from "@/data/DemoData";
import DistributorCard from "./components/DistributorCard";
import bannerImg from "@/assets/banner/packages-banner.png";
import PageBanner from "@/components/shared/PageBanner";
import AvailablePackages from "./components/AvailablePackages";

export default function Packages() {
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        label="Packages"
        img={bannerImg}
        description="Empower Your Cronjob Automation. Seamlessly and precisely manage your scheduled tasks with our reliable subscription packages."
      />
      <Container>
        <section className="section-inner-speacing">
          <h3 className="text-center">Our Available Packages</h3>
          <AvailablePackages />
        </section>
      </Container>

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
      <div className="section-top-speacing"></div>
    </div>
  );
}
