import React from "react";
import TWlogo from "../../images/tw-logo.png";
import { Button } from "../ui/button";
import { MdFastfood } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "../SideBar/SideBar";

const Navbar = () => {
  return (
    <>
      <div className="header bg-gradient-to-r from-[#C1A03E] to-[#F58220] w-full flex justify-center">
        <div className="w-full container h-12 md:h-18  flex justify-between items-center gap-30 ">
          <div className="logo-area flex justify-center items-center w-100 h-full">
            <div className="logo hidden md:block">
              <Link to="/">
                {" "}
                <img src={TWlogo} alt="" className="w-60" />
              </Link>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 text-white rounded-md hover:bg-orange-100 transition">
                    <Menu size={26} />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="p-0 w-64 bg-orange-50 border-none"
                >
                  <SideBar />
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {/* <h1 className="text-white font-bold text-2xl">Buffet</h1> */}
          <div className="login-signin-area w-100 h-full  flex justify-center items-center gap-10 md:gap-8">
            <Button
              variant="outline"
              className="px-10 border-none rounded-2xl hidden md:block font-semibold"
            >
              Sign in
            </Button>
            <Link>
              {" "}
              <LuUserRound className="text-white scale-150 block md:hidden" />{" "}
            </Link>
            <Link to="/cart">
              <MdFastfood className="text-white scale-140" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
