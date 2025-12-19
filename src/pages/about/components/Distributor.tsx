import Container from '@/components/wrapper/Container'
import { distributors } from '@/data/DemoData'
import DistributorCard from './DistributorCard'

export default function Distributor() {
  return (
    <Container>
      <section className="section-inner-speacing">
        <h3 className="text-center font-semibold">Our Distributors</h3>

        <div className='min-w-[350px]'>
          <p className="ecj_fs-md text-center md:text-left mt-3 md:mt-0"> </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] mt-7 lg:mt-10  gap-6 md:gap-8 lg:gap-10">
          {distributors.map((item) => (
            <DistributorCard key={item._id} distributor={item} />
          ))}
          <div className="border flex items-center justify-center p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
            <p>Comming soon...</p>
          </div>
        </div>
      </section>
    </Container>
  )
}
