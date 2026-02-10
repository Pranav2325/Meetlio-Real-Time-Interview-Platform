import { Link } from "react-router";
import { ArrowRightIcon, CodeXml } from "lucide-react";
import {SignInButton} from "@clerk/clerk-react"
const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* navbar */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* logo */}
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            {/* img */}
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center">
              <CodeXml />
            </div>
            {/* text */}
            <div className="flex flex-col">
              <span className="text-xl font-mono tracking-wider">
                Meetlio
              </span>

            </div>
          </Link>

          {/* auth btn */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 border">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform"/>

            </button>
          </SignInButton>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
