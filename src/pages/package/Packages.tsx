// images
import bannerImg from "@/assets/banner/packages-banner.png";

// components
import Container from "@/components/wrapper/Container";
import PageBanner from "@/components/shared/PageBanner";
import AvailablePackages from "./components/AvailablePackages";
import LatestUpdates from "./components/LatestUpdates";
import { Link } from "react-router";
import { Button } from "@/components/button/Button";

export default function Packages() {
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        textWrapperStyle="bg-slate-800/50"
        label="Packages"
        img={bannerImg}
        description="Empower Your Cronjob Automation. Seamlessly and precisely manage your scheduled tasks with our reliable subscription packages."
      />
      <div className="w-full section-top-speacing "></div>
      <LatestUpdates />
      <Container>
        <section className="section-inner-speacing">
          <h3 className="text-center">Our Available Packages</h3>
          <AvailablePackages />
        </section>
        <section className="section-inner-speacing text-center">
         <Link className="block " target="_blank" to="https://telegram.me/ExpressCronJOB">
              <Button className="!bg-blue-500 !text-white ecj_fs-base" label="Join our telegram channel" />
            </Link>
        </section>
      </Container>
      <div className="section-top-speacing"></div>
    </div>
  );
}
