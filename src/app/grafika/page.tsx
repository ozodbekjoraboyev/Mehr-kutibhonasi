"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChartData {
  date: string;
  borrowed: number;
  returned: number;
}

interface Grafika {
  data: ChartData[];
}

export default function BorrowingChart({ data }: Grafika) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg sm:text-xl">📈 Kitob Olish/Qaytarish</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="date" fontSize={12} tickLine={false} />
            <YAxis fontSize={12} tickLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: "8px" }} 
              cursor={{ strokeDasharray: "3 3" }} 
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Line
              type="monotone"
              dataKey="borrowed"
              stroke="#4F46E5"
              strokeWidth={2}
              name="Olingan"
            />
            <Line
              type="monotone"
              dataKey="returned"
              stroke="#22C55E"
              strokeWidth={2}
              name="Qaytarilgan"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
