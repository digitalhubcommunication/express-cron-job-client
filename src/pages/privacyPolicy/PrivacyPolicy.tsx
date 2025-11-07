import PageBanner from "@/components/shared/PageBanner";
import bannerImg from "@/assets/banner/privacy-banner.png";
import Container from "@/components/wrapper/Container";
export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <PageBanner
        textStyle="text-white !max-w-[900px]"
        textWrapperStyle="bg-slate-900/50"
        label="Privacy Policy"
        img={bannerImg}
        description="Learn how we collect, use, and protect your information. Your data security is our priority."
      />
      <div className="w-full section-top-speacing"></div>
      <section className="w-full section-inner-speacing">
        <Container className="!max-w-[1200px]">
          <div className="w-full mb-8 md:mb-10 lg:mb-14">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odio debitis modi cupiditate cum quibusdam qui error necessitatibus atque! Natus commodi illum labore in nihil amet recusandae eaque ullam qui</p>
            <br />
            <p>Nulla quas minus repellat labore expedita quasi dolores molestias iste at tempore. Voluptas explicabo, nihil pariatur aliquam ipsa, sit vitae, blanditiis necessitatibus magnam facere at fugit! Aliquid est iusto tempora quos culpa laudantium voluptatum ullam blanditiis architecto sed voluptas quis quasi eveniet facere sunt modi rem placeat voluptate eum sapiente nemo illo, cupiditate cumque! Cumque corrupti nobis, excepturi reiciendis commodi suscipit rerum soluta fugit minima iste. Architecto, repudiandae ut itaque rem corrupti aperiam fuga, sit autem eum in quam, accusantium fugiat modi qui ullam dolorem voluptates suscipit nam sint quos vel. Enim?</p>
            <br />
            <p>adipisicing elit. Repellendus cumque assumenda, aperiam optio sint aliquam et suscipit, veniam amet, laborum eveniet dignissimos rerum saepe placeat doloremque. Atque voluptas voluptatem quasi facere? Architecto debitis delectus veritatis consectetur ex ab dolore repudiandae laudantium a neque vitae et, rerum explicabo corporis voluptatem doloribus modi. Deserunt iste fugit quibusdam eius at excepturi non accusamus nihil. Animi illum labore a suscipit mollitia sunt sit nihil?</p>
            <br />
            <p>Impedit corrupti, iusto rerum eveniet ipsa, necessitatibus provident voluptatum neque mollitia, obcaecati deserunt quis. Vitae labore sunt obcaecati nihil quibusdam cupiditate aspernatur doloribus ipsa quam. Et sed maxime placeat vitae cumque dolores consequuntur molestias modi ex saepe? Tempora quis iusto architecto voluptas, suscipit commodi placeat doloribus nam distinctio obcaecati asperiores expedita nostrum minus illum alias quod accusantium aspernatur cumque delectus esse error ratione tempore! Minus placeat ad sint! Nemo similique totam nulla qui atque officia ad harum ea magni perspiciatis quia repellat perferendis provident, iusto quo veniam ratione debitis iste, nam deleniti temporibus vitae. Necessitatibus ut impedit, amet enim ipsum, provident ratione saepe sequi illum soluta dolorum optio accusamus aliquam deleniti qui doloribus laudantium exercitationem quasi totam expedita iste! Provident, laborum consequatur dolorem est, totam assumenda doloribus pariatur porro perspiciatis, laboriosam omnis consectetur voluptatibus odio. Totam ex eos quibusdam, aspernatur tempore nobis voluptates nesciunt corporis illo earum voluptatem atque, ipsa similique in quasi sed maiores quaerat enim magnam assumenda beatae quia? Commodi, cum quae veniam repellendus illum veritatis non earum explicabo vitae laborum, minima deserunt dolor incidunt officia consectetur. Minus sunt dignissimos architecto id, quod consequatur unde tempore qui aliquid a cum!</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
