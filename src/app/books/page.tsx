"use client";
import { BooksType } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search01Icon from "../../../public/search-01-stroke-rounded";
import Book from "../book/page";
import Loader from "@/loading/page";

export default function Books() {
  const [books, setBooks] = useState<BooksType>([]);
  const [searchInput, setSearchInput] = useState("");
  const [busy, setBusy] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://library.softly.uz/api/app/books?size=20&page=1&order=DESC",
        { params: { busy } }
      )
      .then((res) => {
        setBooks(res.data.items || []);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [busy]);

  const searchInputFilter = books.filter((item) =>
    item.name.toUpperCase().includes(searchInput.toUpperCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-blue-700">
          Kitoblar
        </h1>
      </div>

      {/* Filtrlash tugmalari */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 mt-8">
        <div className="flex gap-3">
          {[
            { label: "Barchasi", value: null },
            { label: "Band", value: false },
            { label: "Bo'sh", value: true },
          ].map(({ label, value }) => (
            <button
              key={label}
              onClick={() => setBusy(value)}
              disabled={loading}
              className={`px-6 py-2 rounded-md font-semibold text-lg sm:text-xl transition-all
                ${busy === value ? "bg-blue-700 text-white" : "bg-gray-300 text-black"} 
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500 hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Qidiruv paneli */}
        <div className="flex border border-blue-700 p-2 rounded-md w-full sm:w-auto max-w-lg">
          <input
            value={searchInput}
            type="text"
            className="w-full outline-none bg-transparent text-lg sm:text-xl p-2"
            placeholder="Kitob nomini yozing..."
            onChange={(e) => setSearchInput(e.target.value)}
            disabled={loading}
          />
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-4 py-2"
            disabled={loading}
          >
            <Search01Icon />
          </button>
        </div>
      </div>

      {/* Kitoblar ro‘yxati */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {searchInputFilter.map((item) => (
            <Book key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}