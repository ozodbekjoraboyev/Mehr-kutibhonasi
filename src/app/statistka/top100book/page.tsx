"use client";
import { TopBooksLastWeekType, topBooksType } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TopBook() {
  const [bookStok, setBookStok] = useState<topBooksType[]>();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`https://library.softly.uz/api/app/stats`).then((res) => {
      setBookStok(res.data.top_books);
    });
  }, []);

  const searchInputFilter = bookStok?.filter((item) => {
    return item.name.toUpperCase().includes(searchInput.toUpperCase());
  });
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold  text-center mb-6">
      {"  📚 Oxirgi haftada eng ko‘p o‘qilgan kitoblar"}
      </h2>

      <div className="    ">
        <div className="w-full max-w-xl ju m-auto  mb-5 mt-5 flex border-blue-600 border-2 rounded p-2 focus-within:ring-2 focus-within:ring-blue-500 dark:border-gray-500 dark:focus-within:ring-gray-400">
          <input
            value={searchInput}
            type="text"
            className="w-full outline-none bg-transparent text-lg sm:text-xl "
            placeholder="Type something..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
        {searchInputFilter?.map((item, index) => (
          <div
            key={index}
            className="flex  bg-gray-100 text-white dark:bg-gray-800 p-3 rounded-lg shadow-sm mb-3"
          >
            <span className="text-xl font-bold ">{index + 1}.</span>
            <div>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p className="text-sm">{item.count} {"marta o'qilgan"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
