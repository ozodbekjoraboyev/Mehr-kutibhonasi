"use client";
import Loader from "@/loading/page";
import { FewBooks } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Zahira() {
  const [few_books, setFew_books] = useState<FewBooks[]>();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(`https://library.softly.uz/api/app/stats`).then((res) => {
      setFew_books(res.data.few_books);
    });
  }, []);

  const searchInputFilter = few_books?.filter((item) => {
    return item.name.toUpperCase().includes(searchInput.toUpperCase());
  });

  if (!few_books) {
    return <div><Loader /></div>
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
      <p className="font-bold text-2xl text-center p-2 pb-4 ">
        📚 Zarur (yetishmayotgan) kitoblar
      </p>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-xl flex border-blue-600 border-2 rounded p-2 focus-within:ring-2 focus-within:ring-blue-500 dark:border-gray-500 dark:focus-within:ring-gray-400">
          <input
            value={searchInput}
            type="text"
           className="w-full outline-none bg-transparent text-lg sm:text-xl text-white dark:text-black"
            placeholder="Type something..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>

        <div className="w-full mt-4 space-y-2">
          {searchInputFilter?.map((item, index) => (
            <div
              key={item.bookId}
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-sm"
            >
              <p className="text-lg sm:text-xl dark:text-white">
                <span className="font-bold">{index + 1}.</span> {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Zahira;
