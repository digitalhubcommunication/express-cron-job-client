import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className?: string;
};
export default function Container({
  children,
  className = "",
}: TProps) {
  return (
    <div className={`w-full max-w-[1480px] mx-auto px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 ${className}`}>
      {children}
    </div>
  );
}
