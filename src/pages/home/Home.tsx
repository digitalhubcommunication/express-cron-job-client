import Container from "@/components/wrapper/Container";
import lottieJson from "@/assets/json/cronautomation.json";
import Lottie from "lottie-react";
import { Button } from "@/components/button/Button";
import { Link } from "react-router-dom";
import Features from "./components/Features";
import LatestUpdates from "../package/components/LatestUpdates";

export default function Home() {
  return (
    <div className="w-full">
      <section className={`w-full h-auto relative`}>
        <Container className="flex flex-col md:flex-row items-center md:gap-10 lg:gap-20 2xl:min-h-[668px]">
          <div className="w-full max-w-[400px] mx-auto md:max-w-full md:w-3/6">
            <Lottie animationData={lottieJson} loop={true} />
          </div>
          <div className="w-full md:w-3/6 md:py-10 mb-10 md:mb-0">
            <h1>Automate Your Tasks, Save Your Time with EXPRESSCRONJOB</h1>
            <p className="my-3 ecj_fs-base">
              EXPRESSCRONJOB offers a lightning-fast and reliable cron job
              service designed to automate your scheduled tasks with
              ease.Streamline your operations and reclaim valuable time,
              empowering you to focus on what matters most.
            </p>
            <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-3 lg:gap-5 items-center">
              <Link to="/packages">
              <Button className="ecj_fs-base" label="Get Now" />
            </Link>
            <Link className="block " target="_blank" to="https://telegram.me/ExpressCronJOB">
              <Button className="!bg-blue-500 !text-white ecj_fs-base" label="Join our telegram channel" />
            </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-5 !bg-slate-800 w-full">
        <Container>
          <p className="text-center ecj_fs-md text-white">
            Your dedicated partner in seamless scheduling, offering a
            high-performance solution.
          </p>
        </Container>
      </section>
      <Features />
      <LatestUpdates>
        <Link className="block mt-5" to="/packages">
          <Button className="ecj_fs-base" label="Get Now" />
        </Link>
      </LatestUpdates>
      {/* ====== our distributors =========
      <Distributor />
      */}
      <section className="section w-full">
        <Container>
          <h3 className="text-center mb-2 font-semibold">Get you domain automated</h3>
          <p className="text-center ecj_fs-md max-w-[800px] mx-auto">
            Unlock the true strength of setting up tasks automatically with
            EXPRESSCRONJOB. It's incredibly simple. It's super fast. And it's
            always dependable.
          </p>
          <div className="w-full text-center mt-5 flex flex-wrap lg:flex-nowrap items-center justify-center gap-3 lg:gap-5">
            <Link className="block" to="/packages">
              <Button className="ecj_fs-base" label="Get Now" />
            </Link>
            <Link className="block " target="_blank" to="https://telegram.me/ExpressCronJOB">
              <Button className="!bg-blue-500 !text-white ecj_fs-base" label="Join our telegram channel" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
