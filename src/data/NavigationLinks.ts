import { CartIcon, ClockWorkIcon, CloudFlareIcon, CreditCartIcon, GlobeIcon, NetworkIcon, TelegramIcon, UserDashboardIcon, UserIcon, UsersIcon } from "@/components/icons/Icons";
import { TLink, TSidebarLink } from "@/types/types";


export const authUserLinks: TSidebarLink[] = [
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

export const adminLinks: TSidebarLink[] = [
    {
        label: "Dashboard",
        Icon: UserDashboardIcon,
        to: "/admin/dashboard"
    },
    {
        label: "Users",
        Icon: UsersIcon,
        to: "/admin/users"
    },
     {
        label: "Domains",
        Icon: GlobeIcon,
        to: "/admin/domains"
    },
    ,
    {
        label: "History",
        Icon: ClockWorkIcon,
        to: "/admin/user-cron-history"
    },
    {
        label: "Packages",
        Icon: CreditCartIcon,
        to: "/admin/all-packages"
    },
    // {
    //     label: "Connect Telegram",
    //     Icon: TelegramIcon,
    //     to: "/admin/connect-telegram"
    // },
    // {
    //     label: "Dhru Fusion Setup",
    //     Icon: CartIcon,
    //     to: "/admin/dhru-fusion-setup"
    // },
    // {
    //     label: "Cloudflare Setup",
    //     Icon: CloudFlareIcon,
    //     to: "/admin/cloudflare-setup"
    // },
]

export const navLinks: TLink[] = [
    // {
    //     label: "Home",
    //     to: "/"
    // },
    {
        label: "Packages",
        to: "/packages"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Contact",
        to: "/contact"
    }
]