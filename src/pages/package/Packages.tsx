import Container from "@/components/wrapper/Container";
import { cronPackages } from "@/data/DemoData";
import PackageCard from "./components/PackageCard";

export default function Packages() {
  return (
    <div className="w-full">
      <Container>
        <section className="section-inner-speacing">
          <h1 className="text-center">Our Available Packages</h1>

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-7 lg:mt-10 gap-10">
          {cronPackages.map((item, index) => (
            <PackageCard index={index} key={item._id} cronPackage={item} />
          ))}
        </div>
        </section>
        <section>

        </section>
      </Container>
    </div>
  );
}
