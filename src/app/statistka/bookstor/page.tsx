'use client'
import { TopBooksLastWeekType } from '@/Type';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function BookStok() {
    const [bookStok, setBookStok] = useState<TopBooksLastWeekType[]>()

    useEffect(() => {
        axios.get(`https://library.softly.uz/api/app/stats`).then((res) => {
            setBookStok(res.data.top_books_last_week);
        });
    }, []);

    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                📚 Oxirgi haftada eng ko‘p o‘qilgan kitoblar
            </h2>

            {!bookStok ? (
                <p className="text-center text-gray-600">Yuklanmoqda...</p>
            ) : bookStok.length === 0 ? (
                <p className="text-center text-gray-600">Hozircha ma’lumot yo‘q.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookStok.map((item, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-5 flex items-center">
                            <span className="text-xl font-bold text-gray-700 mr-3">
                                {index + 1}.
                            </span>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                <p className="text-gray-600">{item.count} marta o‘qilgan</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
