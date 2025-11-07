import Container from '@/components/wrapper/Container'
import cronConnection from "@/assets/images/cron-connection.png";
import { ReactNode } from 'react';


export default function LatestUpdates({children=<></>}:{children?:ReactNode}) {
  return (
    <Container>
        <section className="section-inner-speacing flex flex-col md:flex-row items-center gap-10 md:gap-8 lg:gap-10">
          <div className="w-full">
            <h3 className="font-semibold mb-1 ">
             Latest Features
            </h3>
            <p>Now, your website can automatically update prices.</p>

            <p className="my-5">
              <span className="font-semibold">
                Automation at Your Fingertips!{" "}
              </span>
              No more manual URL hassles – simply add your domain, and your
              cronjobs and price updates will be fully set up, <span className="font-semibold"> completely
             automated</span>. Our EXPRESSCRONJOB service offers you{" "}
              <span className="font-semibold">unlimited execution freedom</span>
              , with <span className="font-semibold"> no limits</span> whatsoever!😍
            </p>

            <p>
              Log in to your EXPRESSCRONJOB dashboard and activate the 'Price
              Update' feature to see how effortlessly your tasks are managed.
            </p>

            {children}
          </div>
          <div className="w-full max-w-[500px]">
            <img
              src={cronConnection}
              width={500}
              height={400}
              alt="Cron Connection"
              className="w-full h-auto"
            />
          </div>
        </section>
      </Container>
  )
}
