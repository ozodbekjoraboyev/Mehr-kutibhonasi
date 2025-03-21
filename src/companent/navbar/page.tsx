"use client";

import Darkmoone from "@/darkmoon/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu01Icon from "../../../public/menu-01-stroke-rounded (2)";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  className="bg-white shadow-md fixed w-full  top-0 z-50">
      <nav className="flex justify-between items-center  container mx-auto px-4 md:px-16 py-4">
       
        <Link href={"/"}>
          <Image
            width={150}
            height={50}
            src={"https://mehrkutubxonasi.uz/assets/images/svg-hor-logo-mehr.svg"}
            alt="Mehr kutubxonasi Logo"
          />
        </Link>

     
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }} 
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "✖" : <Menu01Icon size={30} />}
          </motion.div>
        </button>

        {/* Katta ekran menyusi */}
        <ul className="hidden md:flex gap-8 text-blue-700 font-semibold text-lg">
          <li><Link href="/manzil">Manzil</Link></li>
          <li><Link href="/hissa">Hissa qo‘shish</Link></li>
          <li><Link href="/zahira">Zarur kitoblar</Link></li>
          <li><Link href="/statistka">Statistika</Link></li>
          <Darkmoone />
        </ul>
      </nav>

      {/* Mobil menyu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md overflow-hidden"
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-blue-700 font-semibold text-lg">
          <li><Link href="/manzil" onClick={() => setIsOpen(false)}>Manzil</Link></li>
          <li><Link href="/hissa" onClick={() => setIsOpen(false)}>Hissa qo‘shish</Link></li>
          <li><Link href="/zahira" onClick={() => setIsOpen(false)}>Zarur kitoblar</Link></li>
          <li><Link href="/statistka" onClick={() => setIsOpen(false)}>Statistika</Link></li>
          <Darkmoone />
        </ul>
      </motion.div>
    </div>
  );
}
