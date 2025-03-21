"use client";
import { TopBooksLastWeekType } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BookStok() {
  const [bookStok, setBookStok] = useState<TopBooksLastWeekType[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("https://library.softly.uz/api/app/stats").then((res) => {
      setBookStok(res.data.top_books_last_week || []);
    });
  }, []);

  const searchInputFilter = bookStok.filter((item) =>
    item.name.toUpperCase().includes(searchInput.toUpperCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        📚 Oxirgi haftada eng ko‘p o‘qilgan kitoblar
      </h2>

      <div className="max-w-xl mx-auto mb-5 flex items-center border border-blue-600 rounded-lg overflow-hidden">
        <input
          value={searchInput}
          type="text"
          className="w-full p-2 outline-none text-lg sm:text-xl"
          placeholder="Kitob nomini yozing..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base font-medium hover:bg-blue-700">
          Search
        </button>
      </div>

      <div className="space-y-3">
        {searchInputFilter.length > 0 ? (
          searchInputFilter.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-sm"
            >
              <span className="text-lg sm:text-xl font-bold text-blue-600 mr-3">
                {index + 1}.
              </span>
              <div>
                <p className="text-base sm:text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.count} marta o‘qilgan
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Hech narsa topilmadi.</p>
        )}
      </div>
    </div>
  );
}