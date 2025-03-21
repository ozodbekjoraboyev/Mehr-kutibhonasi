"use client";
import Loader from "@/loading/page";
import { BooksCount } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Top100Book from "./top100book/page";
import TopLibrarians from "./top30/page";
import BookStok from "../bookstor/page";
import Grafika from "../grafika/page";

function Statistika() {
  
  const [bookStatistika, setBookStatistika] = useState<BooksCount | null>();
  
  const graphData = bookStatistika?.one_month_leased_rents_by_day?.map(
    (item) => ({
      date: item.day.split("T")[0].slice(-5),
      borrowed: parseInt(item.count.toString()),
      returned: parseInt(
        bookStatistika.one_month_returned_rents_by_day
          .find((r) => r.day === item.day)
          ?.count.toString() || "0"
      ),
    })
  );
  useEffect(() => {
    axios.get(`https://library.softly.uz/api/app/stats`).then((res) => {
      setBookStatistika(res.data);
      console.log(res.data);
    });
  }, []);

  if (!bookStatistika) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
  

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">📊 Kutubxona statistikasi</h1>
        <p className="text-lg  mt-2">20.04.2021 sanadan hozirgacha</p>
      </div>

      {/* Umumiy statistika */}
      <div>
        <h2 className="text-3xl font-semibold  mb-6">📚 Umumiy statistika</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl font-semibold ">
          <p className="border-b border-gray-300 pb-2">
            📚 Barcha kitoblar:{" "}
            <span className="text-blue-600 font-extrabold">
              {bookStatistika?.books_count}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            🧑‍🚀 Kitobxonlar:{" "}
            <span className="text-blue-600 font-extrabold">
              {bookStatistika?.librarians_count}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            📖 Umumiy ijaralar soni:{" "}
            <span className="text-blue-600 font-extrabold">
              {bookStatistika?.rents_count}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            👨‍🏫 Erkaklar:{" "}
            <span className="text-blue-600 font-extrabold">
              {bookStatistika?.gender.male}
            </span>{" "}
            | 🧑‍🏫 Ayollar:
            <span className="text-pink-600 font-extrabold">
              {bookStatistika?.gender.female}
            </span>
          </p>
          <p className="border-b border-gray-300 pb-2">
            {"📖 Hozirda o'qilayotgan kitoblar:"}
            <span className="text-blue-600 font-extrabold">
              {bookStatistika?.reading_books_count}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            ⚠️ Kechiktirilgan kitoblar:{" "}
            <span className="text-red-600 font-extrabold">
              {bookStatistika?.expired_leases}
            </span>{" "}
            ta
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold  mt-9 mb-6">
          {"  📊 So‘nggi davr statistikasi"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl font-semibold ">
          <p className="border-b border-gray-300 pb-2">
            {"📖 Kunlik o‘rtacha ijaralar:"}
            <span className="text-blue-600 font-extrabold">
              {" "}
              {bookStatistika?.dayly_leasing_books_avarage_count_of_last_month}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            📖 Oxirgi oyda ijaraga berilgan kitoblar:
            <span className="text-blue-600 font-extrabold">
              {" "}
              {bookStatistika?.leased_books_count_of_last_month}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            📖 Oxirgi haftada berilgan kitoblar:
            <span className="text-blue-600 font-extrabold">
              {" "}
              {bookStatistika?.leased_books_count_of_last_week}
            </span>{" "}
            ta
          </p>
          <p className="border-b border-gray-300 pb-2">
            📖 Oxirgi 24 soat ichida berilgan kitoblar:
            <span className="text-blue-600 font-extrabold">
              {" "}
              {bookStatistika?.leased_books_count_of_last_24_hours}
            </span>{" "}
            ta
          </p>
        </div>
      </div>

      {/* Grafika, Top Kitoblar */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold  mb-4">
          {" 📈 Oxirgi oy bo‘yicha grafigi"}
        </h2>
        <div className="">
          <Grafika data={graphData} />
        </div>
        <div className="mt-6">
          <BookStok />
        </div>
        <div className="mt-6">
          <Top100Book />
        </div>
        <div className=" mt-6">
          <TopLibrarians />
        </div>
      </div>
    </div>
  );
}

export default Statistika;
