import DashboardContainer from "../wrapper/DashboardContainer";

export default function DashboardFooter() {
  return (
    <>
      <div className="w-full grow"></div>
      <DashboardContainer className="grow border-t max-h-14 border-gray-200 dark:border-gray-700">
        <div className="w-full py-2.5 flex items-center justify-center mt-auto">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} EXPRESSCRONJOB. All rights reserved.
          </p>
        </div>
      </DashboardContainer>
    </>
  );
}
