"use client";

import Link from "next/link";

function Hissa() {
  return (
    <div className=" p-12 bg-gray-300">
      <div className=" border-2 rounded-tr-md rounded-b-md bg-white border-blue-700 p-2 w-[600px] m-auto ">
        <Link
          className=" text-blue-700 font-bold text-xl"
          href="https://t.me/mehr_kutubxonasi"
        >
          Kutubxona hissadorlari
        </Link>
        <p className="font-bold text-xl pt-2">✳️ Бепул кутубхонага ҳисса қўшиш</p>
        <p className=" flex flex-col font-semibold gap-1 pb-2 pt-2">Карта: <span>9860 0901 0651 4061</span> <span>(Мирхошимов. И.)</span></p>
        <p className=" pb-2 font-semibold">Қулайлик: рақамлар устига боссангиз нусха олинади</p>
        <div className=" flex flex-wrap font-semibold pb-3">Картага пул юборсангиз <Link href={" @kutubxona_hissadorlari"} className=" text-blue-600"> @kutubxona_hissadorlari</Link> каналида дарҳол кўринади. Текшириб олишингиз мумкин.
        </div>
      </div>
    </div>
  );
}

export default Hissa;
