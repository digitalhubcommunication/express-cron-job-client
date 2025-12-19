import PageBanner from "@/components/shared/PageBanner";
import Container from "@/components/wrapper/Container";
import bannerImg from "@/assets/banner/contact-banner.png";
import ContactForm from "./components/ContactForm";
import formAnimationImg from "@/assets/images/contact-animation.png";

export default function Contact() {
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        label="Contact Us"
        img={bannerImg}
        description="Get in Touch. Let us know your questions, feedback, or collaboration opportunities. We are ready to hear from you and assist you."
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
          <div className="w-full flex items-center gap-10 lg:gap-20 2xl:gap-24 ">
            <ContactForm />
            <div className="w-full hidden md:block">
              <img
                src={formAnimationImg}
                width={500}
                height={400}
                alt="Form Animation Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="w-full section-bottom-speacing"></div>
    </div>
  );
}
