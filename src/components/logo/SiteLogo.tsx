import { Link } from "react-router";

export default function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <Link 
      to="/"
      className={`flex items-center gap-1 bold duration-1000 w-full ${
        className ? className : ""
      }`}
    >
      Site Logo
    </Link>
  );
}
