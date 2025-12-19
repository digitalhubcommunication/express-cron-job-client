import { Link } from "react-router";
import { Button } from "../button/Button";
import Container from "../wrapper/Container";
import noEntry from "@/assets/images/no-entry.png"

export default function NotAuthorized() {
  return (
    <div className="w-full ">
      <Container className=" flex flex-col gap-5 items-center justify-center min-h-screen">
        <img src={noEntry} className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 " width={200} height={200} alt="No authorized entry" />
        <h5 className="text-red-500">You are not authorized to access this page.</h5>
        <Link to="/" >
          <Button label="Home" />
        </Link>
      </Container>
    </div>
  );
}
