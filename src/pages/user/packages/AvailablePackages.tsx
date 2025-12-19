import { WarningIcon } from '@/components/icons/Icons';
import DashboardContainer from '@/components/wrapper/DashboardContainer'
import AllPackages from "@/pages/package/components/AvailablePackages";

export default function AvailablePackages() {
  return (
    <DashboardContainer>
         <section className="mt-5 xl:mt-10">
           <h3 className="text-center">Available Packages</h3>
             <AllPackages />
             <p className='animate-bounce text-center mt-10 text-red-500 flex items-center justify-center gap-2'><WarningIcon /> <span>
              Warning!! Subscribing a package will cancel previous active package</span></p>
            </section>
            </DashboardContainer>
  )
}
