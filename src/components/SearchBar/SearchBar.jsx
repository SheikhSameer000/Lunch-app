import restaurants from "@/utils/data";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      setOpen(false);
      return;
    }
    const results = restaurants.filter((r) =>
      r.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
    setOpen(results.length > 0);
    console.log(restaurants);
  }, [query]);
  //   console.log(filtered);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full md:w-96 h-10  flex items-center gap-2 relative px-4 md:px-0" ref={ref}>
      <CiSearch className="text-3xl" />

      <Input
        className="h-full w-full rounded-xl border border-gray-300 focus-visible:ring-2 focus-visible:ring-orange-500 text-2xl placeholder:text-[18px]"
        type="text"
        placeholder="Seacrh restuarants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full left-0 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200"
          >
            {filtered.map((r, index) => (
              <li
                key={index}
                className="flex gap-5 items-center my-5 px-2"
                onClick={() => {
                  setQuery(r.name);
                  setOpen(false)
                }}
              >
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div className="flex gap-3">
                  <p className="font-medium text-gray-800">{r.name}</p>
                  <p className="text-sm text-gray-600">{r.timing.open}</p>
                  <p className="text-sm text-gray-600">{r.timing.close}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        )}
        {/* {console.log(filtered)} */}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
