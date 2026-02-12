import { UserButton } from "@clerk/clerk-react";
import { BookOpenIcon, CodeXml, LayoutDashboardIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-base-100/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-lg">
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
            <span className="text-xl font-mono tracking-wider">Meetlio</span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          {/* problems link */}
          <Link
            to={"/problems"}
            className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive("/problems") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}
          >
            <div className="flex items-center gap-x-2.5">
              <BookOpenIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Problems</span>
            </div>
          </Link>
          {/* dashboard link */}
          <Link
            to={"/dashboard"}
            className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive("/dashboard") ? "bg-primary text-primary-content" : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}`}
          >
            <div className="flex items-center gap-x-2.5">
              <LayoutDashboardIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Dashboard</span>
            </div>
          </Link>
          <div className="ml-4 mt-2">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
