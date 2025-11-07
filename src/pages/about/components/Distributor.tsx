import Container from '@/components/wrapper/Container'
import { distributors } from '@/data/DemoData'
import DistributorCard from './DistributorCard'

export default function Distributor() {
  return (
     <Container>
        <section className="section-inner-speacing">
          <h3 className="text-center font-semibold">Our Distributors and Resellers</h3>

          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] mt-7 lg:mt-10  gap-6 md:gap-8 lg:gap-10">
            {distributors.map((item) => (
              <DistributorCard key={item._id} distributor={item} />
            ))}
          </div>
        </section>
      </Container>
  )
}
