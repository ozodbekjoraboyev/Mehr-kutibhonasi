"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import { GrafikaType } from "@/Type";



const Grafika = () => {
  const [grafika, setGrafika] = useState<{ name: number; cost: number }[]>([]);
  const [refAreaLeft, setRefAreaLeft] = useState<number | null>(null);
  const [refAreaRight, setRefAreaRight] = useState<number | null>(null);

  // API dan ma’lumot olish
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://library.softly.uz/api/app/stats`);
        const data = res.data.one_month_returned_rents_by_day.map(
          (item: GrafikaType, index: number) => ({
            name: index + 1,
            cost: Number(item.count),
          })
        );
        setGrafika(data);
      } catch (error) {
        console.error("API dan ma'lumot olishda xatolik:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-3xl px-4  ">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => {
          setRefAreaLeft(null);
          setRefAreaRight(null);
        }}
      >
        Zoom Out
      </button>

      <div className="w-full h-80 sm:h-96 md:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={grafika}
            onMouseDown={(e) => setRefAreaLeft(e?.activeLabel ?? null)}
            onMouseMove={(e) =>
              refAreaLeft !== null && setRefAreaRight(e?.activeLabel ?? null)
            }
            onMouseUp={() => {
              setRefAreaLeft(null);
              setRefAreaRight(null);
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#8884d8"
              animationDuration={300}
            />
            {refAreaLeft !== null && refAreaRight !== null && (
              <ReferenceArea
                x1={refAreaLeft}
                x2={refAreaRight}
                strokeOpacity={0.3}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Grafika;
