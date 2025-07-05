import { Link } from "react-router-dom";
import Container from "../wrapper/Container";

export default function Footer() {
  return (
    <div className="w-full py-4 border-t border-gray-300 dark:border-gray-700">
      <Container className="w-full flex flex-col md:flex-row items-center justify-between flex-wrap gap-2 md:gap-10">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} EXPRESSCRONJOB. All rights reserved.
        </p>
        <div className="grow flex items-center justify-end gap-5">
          <Link to="/privacy-policy" className="duration-200 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="duration-200 hover:underline">
            Terms
          </Link>
        </div>
      </Container>
    </div>
  );
}
