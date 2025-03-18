"use client";
import Loader from "@/loading/page";
import { BooksCount } from "@/Type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grafika from "../grafika/page";
import BookStok from "./bookstor/page";
import Top100Book from "./top100book/page";

function Statistika() {
  const [bookStatistika, setBookStatistika] = useState<BooksCount>();

  useEffect(() => {
    axios.get(`https://library.softly.uz/api/app/stats`).then((res) => {
      setBookStatistika(res.data);
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
    <div className="container mx-auto px-6 md:px-20 lg:px-32 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          📊 Kutubxona statistikasi
        </h1>
        <p className="text-lg text-white mt-3">
          20.04.2021 sanadan boshlab hozirgi kungacha
        </p>
      </div>

      <div className=" rounded-lg p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-white mb-4">
          📚 Umumiy statistika
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-white">
          <p>
            📚 Barcha kitoblar:{" "}
            <span className="font-bold">{bookStatistika?.books_count}</span> ta
          </p>
          <p>
            🧑‍🚀 Kitobxonlar:{" "}
            <span className="font-bold">
              {bookStatistika?.librarians_count}
            </span>{" "}
            ta
          </p>
          <p>
            📖 Umumiy ijaralar soni:{" "}
            <span className="font-bold">{bookStatistika?.rents_count}</span> ta
          </p>
          <p>
            👨‍🏫 Erkaklar:{" "}
            <span className="font-bold">{bookStatistika?.gender.male}</span> |{" "}
            🧑‍🏫 Ayollar:{" "}
            <span className="font-bold">{bookStatistika?.gender.female}</span>
          </p>
          <p>
            📖 Hozirda o'qilayotgan kitoblar:{" "}
            <span className="font-bold">
              {bookStatistika?.reading_books_count}
            </span>{" "}
            ta
          </p>
          <p>
            ⚠️ Kechiktirilgan kitoblar:{" "}
            <span className="font-bold">{bookStatistika?.expired_leases}</span>{" "}
            ta
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-w mt-8 mb-4">
          📊 So‘nggi davr statistikasi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
          <p>
            📖 Kunlik o‘rtacha ijaralar:{" "}
            <span className="font-bold">
              {bookStatistika?.dayly_leasing_books_avarage_count_of_last_month}
            </span>{" "}
            ta
          </p>
          <p>
            📖 Oxirgi oyda ijaraga berilgan kitoblar:{" "}
            <span className="font-bold">
              {bookStatistika?.leased_books_count_of_last_month}
            </span>{" "}
            ta
          </p>
          <p>
            📖 Oxirgi haftada berilgan kitoblar:{" "}
            <span className="font-bold">
              {bookStatistika?.leased_books_count_of_last_week}
            </span>{" "}
            ta
          </p>
          <p>
            📖 Oxirgi 24 soat ichida berilgan kitoblar:{" "}
            <span className="font-bold">
              {bookStatistika?.leased_books_count_of_last_24_hours}
            </span>{" "}
            ta
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold  mb-4">
          📈 Oxirgi oy bo‘yicha grafigi
        </h2>
        <div className="  rounded-lg p-6">
          <Grafika />
        </div>
        <BookStok />
        <Top100Book />
      </div>
    </div>
  );
}

export default Statistika;
