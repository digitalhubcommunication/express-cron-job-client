import DashboardContainer from "../wrapper/DashboardContainer";

export default function InvalidUser({
  message,
  className = "",
}: {
  message: string;
  className?: string;
}) {
  return (
    <DashboardContainer>
      <h5 className={`text-center text-red-500 ${className}`}>{message}</h5>
    </DashboardContainer>
  );
}
