import Image from "next/image";
import Statistika from "./statistika/page";
import Books from "./books/page";

export default function Home() {
  return (
    <div className="">
     <Statistika />
     <Books />
    </div>
  );
}
