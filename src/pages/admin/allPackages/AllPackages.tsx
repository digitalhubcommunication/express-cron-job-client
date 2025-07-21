import DashboardContainer from "@/components/wrapper/DashboardContainer";
import SubscriptionPackages from "./components/SubscriptionPackages";
import { Button } from "@/components/button/Button";
import PackageModal from "./components/PackageModal";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/redux/features/modalToggler/ModalTogglerSlice";

export default function AllPackages() {
  const dispatch = useDispatch()
  return (
    <DashboardContainer className="pt-[110px]">
      <section className="section-pb">
        <div className="w-full mb-5 flex flex-wrap items-center justify-between">
          <h3 className="text-center">Packages</h3>
          <Button cb={()=>dispatch(toggleModal("OPEN_NEW_PACKAGE_ADD_MODAL"))} label="New" />
        </div>
        <SubscriptionPackages />
      </section>


      <PackageModal />
    </DashboardContainer>
  );
}
