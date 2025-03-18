"use client";
import { BooksType } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search01Icon from "../../../public/search-01-stroke-rounded";
import Book from "../book/page";
import Loader from "@/loading/page";
export default function Books() {
  const [books, setBooks] = useState<BooksType>();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios
      .get(`https://library.softly.uz/api/app/books?size=20&page=1&order=DESC`)
      .then((res) => {
        setBooks(res.data.items);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  if (!books) {
    return <div>
      <Loader />
    </div>
  }
  const searchInputFilter = books?.filter((item) => {
    return item.name.toUpperCase().includes(searchInput.toUpperCase());
  });
  return (
    <div className="container m-auto">
      <div className=" pt-12">
        <h1 className=" text-center text-4xl font-semibold text-blue-700">
          Kitoblar
        </h1>
      </div>
      <div className=" flex  items-center justify-between px-32 pt-12">
        <div>
          <button className=" bg-blue-700 text-white font-semibold text-xl p-2 rounded-md px-6 ml-">
            Barchasi
          </button>
          <button className=" bg-gray-300 text-black font-semibold text-xl p-2 rounded-md px-6 ml-6">
            Band
          </button>
          <button className=" bg-gray-300 text-black font-semibold text-xl p-2 rounded-md px-6 ml-6">
           {" Bo'sh"}
          </button>
        </div>
        <div className=" border border-blue-700 p-2 rounded-md mb-12 flex">
          <input
            value={searchInput}
            type="text"
            className="w-full outline-none bg-transparent text-lg sm:text-xl "
            placeholder="Type something..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2">
            <Search01Icon />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container px-32 gap-5 ">
        {searchInputFilter.map((item) => {
          return <div key={item.id}>
           <Book  item={item} />
          </div>
        })}
      </div>
    </div>
  );
}
