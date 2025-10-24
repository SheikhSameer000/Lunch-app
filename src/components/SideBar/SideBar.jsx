import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-full h-full border shadow-lg rounded-2xl p-4">
      <nav className="space-y-2">
        {/* Static link */}
        <Button variant="ghost" className="w-full justify-start">
          Dashboard
        </Button>

        {/* Dropdown 1 */}
        <div>
          <button
            onClick={() => toggleMenu("restaurants")}
            className="flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition"
          >
            <span>Restaurants</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                openMenu === "restaurants" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {openMenu === "restaurants" && (
              <motion.div
                key="restaurants"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden pl-5 space-y-1 mt-2"
              >
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Add Restaurant
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Manage Restaurants
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Reviews
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown 2 */}
        <div>
          <button
            onClick={() => toggleMenu("orders")}
            className="flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition"
          >
            <span>Orders</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                openMenu === "orders" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {openMenu === "orders" && (
              <motion.div
                key="orders"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden pl-5 space-y-1 mt-2"
              >
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Pending Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Completed Orders
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
