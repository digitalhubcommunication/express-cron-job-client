import {
  BotIcon,
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
        href={distributor.website}
        className="uppercase ecj_fs-md font-semibold text-blue-400"
      >
        {distributor.company_name}
      </a>
      <div className="w-full flex flex-col gap-0.5 mt-2 rounded-[10px]">
        <p>
          <span className="font-semibold">Website : </span>
          <span>{distributor.website}</span>
        </p>
        <p>
          <span className="font-semibold">Email : </span>
          <span>{distributor.email}</span>
        </p>
        <p>
          <span className="font-semibold">Address : </span>
          <span>{distributor.address}</span>
        </p>
        <p>
          <span className="font-semibold">Payment methods : </span>
          <span>USDT, USDC, ETH, BTC, Card Payment, Bank Payment, Paypal</span>
        </p>
        <div className="w-full flex items-center gap-5 mt-3">
          <a target="_blank" href={distributor.contacts.whatsAppUrl}>
            <WhatsAppIcon className="w-7 h-7" />
          </a>
          <a target="_blank" href={distributor.contacts.telegramBotUrl}>
            <TelegramIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href={distributor.contacts.telegramChannelUrl}>
            <BotIcon className="w-6 h-6" />
          </a>
          <a target="_blank" href={distributor.website}>
            <GlobeIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
