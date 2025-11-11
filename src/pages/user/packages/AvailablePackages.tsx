import DashboardContainer from '@/components/wrapper/DashboardContainer'
import AllPackages from "@/pages/package/components/AvailablePackages";

export default function AvailablePackages() {
  return (
    <DashboardContainer>
         <section className="mt-5 xl:mt-10">
           <h3 className="text-center">Available Packages</h3>
             <AllPackages />
             <p className='text-center mt-10 block'>Warning!! Subscribing a package will cancel previous active package</p>
            </section>
            </DashboardContainer>
  )
}
