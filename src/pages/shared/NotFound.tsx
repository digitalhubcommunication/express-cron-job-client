import { Button } from "@/components/button/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="mt-5" to="/">
        <Button label="Home" />
      </Link>
    </div>
  );
}
