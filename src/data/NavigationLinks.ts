import { CartIcon, ClockWorkIcon, CloudFlareIcon, NetworkIcon, TelegramIcon, UserDashboardIcon, UserIcon } from "@/components/icons/Icons";
import { TSidebarLink } from "@/types/types";


export const authUserLinks:TSidebarLink[] = [
    {
        label: "Dashboard",
        Icon: UserDashboardIcon,
        to: "/settings/dashboard"
    },
    {
        label: "Manual Cron Setup",
        Icon: NetworkIcon,
        to: "/settings/manual-cron-setup"
    },
     {
        label: "Cron History",
        Icon: ClockWorkIcon,
        to: "/settings/cron-history"
    },
    {
        label: "Profile & Password",
        Icon: UserIcon,
        to: "/settings/profile-and-password"
    },
    {
        label: "Connect Telegram",
        Icon: TelegramIcon,
        to: "/settings/connect-telegram"
    },
    {
        label: "Dhru Fusion Setup",
        Icon: CartIcon,
        to: "/settings/dhru-fusion-setup"
    },
    {
        label: "Cloudflare Setup",
        Icon: CloudFlareIcon,
        to: "/settings/cloudflare-setup"
    },
]