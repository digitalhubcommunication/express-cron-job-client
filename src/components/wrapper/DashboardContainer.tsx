import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className?: string;
};
export default function DashboardContainer({
  children,
  className = "",
}: TProps) {
  return (
    <div className={`w-full px-4 md:px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
