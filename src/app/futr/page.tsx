import Image from "next/image";
import React from "react";

function Futer() {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-32 py-6 mt-12 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          width={200}
          height={200}
          src="https://mehrkutubxonasi.uz/assets/images/svg-hor-logo-mehr.svg"
          alt="footer logo"
          className="w-48 md:w-56"
        />

        <a
          className="flex items-center gap-3"
          href="https://t.me/YOUR_TELEGRAM_LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={50}
            height={50}
            src="https://mehrkutubxonasi.uz/assets/images/telegramm.png"
            alt="telegram"
            className="w-12 md:w-16 hover:scale-110 transition-transform duration-300"
          />
          <div>
            <p className=" text-xl font-bold">Bizning Telegram</p>
            <p className="text-blue-700 font-bold text-2xl">
              @mehr_kutubxonasi
            </p>
          </div>
        </a>
      </div>

      <div className="text-center text-gray-600 text-sm mt-4">
        © {new Date().getFullYear()} Mehr Kutubxonasi. Barcha huquqlar
        himoyalangan.
      </div>
    </div>
  );
}

export default Futer;
