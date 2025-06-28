import { UserDashboardIcon } from "@/components/shared/icons/Icons";
import { TSidebarLink } from "@/types/Link";

export const authUserLinks:TSidebarLink[] = [
    {
        label: "Dashboard",
        Icon: UserDashboardIcon,
        to: "/settings/dashboard"
    },
]