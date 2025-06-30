import DashboardContainer from "../wrapper/DashboardContainer";

export default function DashboardFooter() {
  return (
    <DashboardContainer className="border-t border-gray-200 dark:border-gray-700 mt-40">
        <div className="w-full py-2.5 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} EXPRESSCRONJOB. All rights reserved.
            </p>
        </div>
    </DashboardContainer>
  )
}
