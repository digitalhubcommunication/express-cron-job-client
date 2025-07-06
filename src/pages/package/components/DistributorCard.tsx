import {
  FacebookIcon,
  GlobeIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons/Icons";
import { TDistributor } from "@/types/types";

type Props = {
  distributor: TDistributor;
};

export default function DistributorCard({ distributor }: Props) {
  return (
    <div className="border p-4 md:p-5 border-slate-200 bg-blue-50/70 hover:bg-blue-50 hover:shadow-xl duration-300 rounded-[10px] overflow-hidden">
      <a
        target="_blank"
        href={distributor.siteUrl}
        className="uppercase ecj_fs-md font-semibold text-blue-400"
      >
        {distributor.name}
      </a>
      <div className="w-full flex flex-col gap-0.5 mt-2 rounded-[10px]">
        <p>
          <span className="font-semibold">Phone : </span>
          <span>{distributor.phone}</span>
        </p>
        <div className="w-full flex items-center gap-5 mt-3">
          <a target="_blank" href={distributor.whatsApp}>
            <WhatsAppIcon className="w-7 h-7" />
          </a>
          <a target="_blank" href={distributor.telegram}>
            <TelegramIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href={distributor.faceebook}>
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href={distributor.siteUrl}>
            <GlobeIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
