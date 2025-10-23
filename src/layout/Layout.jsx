import Navbar from "../components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import SideBar from "@/components/SideBar/SideBar";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="flex flex-1">
        <div className="sticky top-[20px] h-[calc(100vh-64px)] w-80 border-r hidden md:block">
          <SideBar />
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <footer className=" bottom-0 w-full h-11 bg-gray-200">
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
