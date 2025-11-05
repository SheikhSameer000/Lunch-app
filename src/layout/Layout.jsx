import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SideBar from "@/components/SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="flex-1 w-full">
        <div className="flex flex-1 md:container md:mx-auto gap-4 md:gap-8 px-4 md:px-0 py-6 ">
          {/* <aside className="sticky top-[80px] h-[calc(90vh-80px)] w-64 bg-black hidden md:block">
            <SideBar />
          </aside> */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>

      <footer className="w-full h-11 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;







