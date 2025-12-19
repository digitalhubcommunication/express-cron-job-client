import Card from "@/components/shared/Card";
import Container from "@/components/wrapper/Container";
import { featureData } from "@/data/features";

export default function Features() {
  return (
    <section className="section w-full">
      <Container>
        <h3 className="text-center font-semibold">All Features</h3>

        <div className="w-full mt-6 md:mt-10 gap-7 md:gap-8 xl:gap-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {
                featureData.map(feature=><Card className="flex flex-col gap-2" key={feature.title}>
                    <feature.Icon />
                    <h4 className="font-semibold text-center">{feature.title}</h4>
                    <p>{feature.des}</p>
                </Card>)
            }
        </div>
      </Container>
    </section>
  );
}
