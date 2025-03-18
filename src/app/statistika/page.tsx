"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Statistika() {
  const [count, setCount] = useState(1);
  const [book, setBook] = useState(1);
  const [oqilganlar, setOqilganlar] = useState(1);
  const [barchasi, setBarchasi] = useState(1);

  useEffect(() => {
    let animationFrame: number;
    const startTime = performance.now();

    const updateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = elapsed / 1000;

      setCount(Math.min(1 + progress * 9198, 9199));
      setBook(Math.min(1 + progress * 2866, 2867));
      setOqilganlar(Math.min(1 + progress * 52558, 52559));
      setBarchasi(Math.min(1 + progress * 6072, 6073));

      if (elapsed < 33000) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div>
        <h1 className="text-3xl font-semibold text-center">
          Kutubxona statistikasi
        </h1>
        <Link href={"/statistka"}>
          <p className="pt-5 text-blue-700 text-2xl font-semibold text-center">
            To’liq ko’rish
          </p>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-10 pt-10">
        <StatCard
          image="https://mehrkutubxonasi.uz/assets/images/man-teacher.png"
          count={count}
          text="Kitobxonlar"
        />
        <StatCard
          image="https://mehrkutubxonasi.uz/assets/images/open-book.png"
          count={book}
          text="O'qilayotgan kitoblar"
        />
        <StatCard
          image="https://mehrkutubxonasi.uz/assets/images/check-mark.png"
          count={oqilganlar}
          text="O'qilgan kitoblar"
        />
        <StatCard
          image="https://mehrkutubxonasi.uz/assets/images/books.png"
          count={barchasi}
          text="Barcha kitoblar"
        />
      </div>
    </div>
  );
}

function StatCard({
  image,
  count,
  text,
}: {
  image: string;
  count: number;
  text: string;
}) {
  return (
    <div className="flex flex-col text-center items-center gap-5 w-62">
      <Image width={100} height={100} src={image} alt={text} />
      <p className="text-4xl  font-bold">
        {Math.floor(count).toLocaleString()}
      </p>
      <p className="text-3xl font-bold">{text}</p>
    </div>
  );
}
