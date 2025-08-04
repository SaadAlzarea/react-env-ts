import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-screen">
      <div className="font-mono flex flex-col gap-5 items-center justify-center shadow-lg p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl text-shadow-lg">
            This is Home . TSX
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center w-full">
          <p>Listing in post 3000</p>
          <p className="font-bold">http://localhost:3000/</p>
          <Button className="w-full">
            <Link target="_blank" to={"http://localhost:3000/"}>
              Go
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
