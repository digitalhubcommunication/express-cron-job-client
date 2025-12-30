import PageBanner from "@/components/shared/PageBanner";
import Container from "@/components/wrapper/Container";
import bannerImg from "@/assets/banner/about-banner.png"
import { distributors, reseller } from "@/data/DemoData";
import DistributorCard from "../about/components/DistributorCard";

export default function PartnersPage() {
    return (
        <div className="w-full">
            <PageBanner
                textStyle="text-white !max-w-[900px]"
                textWrapperStyle="bg-slate-900/50"
                label="Our Partners"
                img={bannerImg}
                description="Collaborate with Us. Explore partnership opportunities to enhance your services and reach a wider audience through our reliable cron job scheduling platform."
            />

            <Container className="">
                <section className="section-inner-speacing">
                    <h3 className="text-center font-semibold">Our Distributors</h3>

                    <div className='min-w-[350px]'>
                        <p className="ecj_fs-md text-center md:text-left mt-3 md:mt-0"> </p>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] mt-7 lg:mt-10  gap-6 md:gap-8 lg:gap-10">
                        {distributors.map((item) => (
                            <DistributorCard key={item._id} distributor={item} />
                        ))}
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                    </div>
                </section>
            </Container>

            <Container>
                <section className="section-inner-speacing">
                    <h3 className="text-center font-semibold">Our Resellar</h3>

                    <div className='min-w-[350px]'>
                        <p className="ecj_fs-md text-center md:text-left mt-3 md:mt-0"> </p>
                    </div>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] mt-7 lg:mt-10  gap-6">
                        {reseller.map((item) => (
                            <DistributorCard key={item._id} distributor={item} />
                        ))}
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                        <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
                            <p>We are waiting for you...</p>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}
