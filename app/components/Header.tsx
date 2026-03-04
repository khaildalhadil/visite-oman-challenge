import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex justify-between items-center ">
      <Image
        src="/Oman.png" 
        alt="oman logo" 
        width={100}
        height={100}
        />
        <ul className="flex gap-5 text-lg underline hover:">
          <li><Link href={"/"} >Home</Link></li>
          <li><Link href={"/destinations"} >destinations</Link></li>
        </ul>

        <div>
          <button>عربي</button>
        </div>

    </div>
  )
}