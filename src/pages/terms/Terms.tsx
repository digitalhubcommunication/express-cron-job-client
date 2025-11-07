import PageBanner from "@/components/shared/PageBanner";
import bannerImg from "@/assets/banner/terms-banner.png";
import Container from "@/components/wrapper/Container";

export default function Terms() {
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
            <h3 className="text-center font-semibold">Let's Connect</h3>
            <p className="text-center ecj_fs-md mt-2">
              Have a question or want to work with us? Send us a message!
            </p>
            <p></p>
          </div>
        </Container>
      </section>
    </div>
  );
}
