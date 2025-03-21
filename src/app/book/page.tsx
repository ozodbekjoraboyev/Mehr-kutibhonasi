import Image from "next/image";
import Link from "next/link";

export default function Book({ item }: any) {
  return (
    <div className="bg-white  shadow-md rounded-xl h-full overflow-hidden p-5 transition hover:shadow-xl flex flex-col">
      <Link href={"/moddal"}>
        <div className="w-full h-[220px] flex justify-center items-center">
          <Image
            width={150}
            height={220}
            src={item.image || "/fallback.jpg"} 
            alt={item.name || "No image available"}
            className="rounded-lg object-cover w-40 h-full"
            priority
          />
        </div>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-600">
            {item.author.name.length > 35
              ? item.author.name.slice(0, 35) + "..."
              : item.author.name}
          </p>
        </div>
      </div>

      <button
        className={`px-4 py-2  mt-5 rounded-lg w-full cursor-pointer text-white transition duration-200 ${
          item.stocks.busy
            ? "bg-[#F2994A] hover:bg-[#d88234]"
            : "bg-blue-700 font-bold hover:bg-blue-800"
        }`}
      >
        {item.stocks.busy ? "Band" : `Bosh`}
      </button>
    </div>
  );
}
