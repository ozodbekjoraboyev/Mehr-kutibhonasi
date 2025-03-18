import Darkmoone from "@/darkmoon/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <nav className=" flex  justify-between items-center container m-auto px-32">
        <Link href={"/"}>
          {" "}
          <Image
            width={200}
            height={200}
            src={
              "https://mehrkutubxonasi.uz/assets/images/svg-hor-logo-mehr.svg"
            }
            alt="Mehir kutibhonasi Logo"
          />
        </Link>
        <ul className=" flex gap-12">
          <li className="text-blue-700 font-semibold text-xl">
            <Link href={"/manzil"}>Manzil</Link>
          </li>
          <li className="text-blue-700 font-semibold text-xl">
            <Link href={"/hissa"}>{"Hissa qo'shish"}</Link>
          </li>
          <li className="text-blue-700 font-semibold text-xl">
            <Link href={"/zahira"}>Zarur kitoblar</Link>
          </li>
          <li className="text-blue-700 font-semibold text-xl">
            <Link href={"/statistka"}>Statistika</Link>
          </li>
          <Darkmoone />
        </ul>
      </nav>
    </div>
  );
}
