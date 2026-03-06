import Link from "next/link";
import { PiSmileySadThin } from "react-icons/pi";
import "@/app/[locale]/globals.css";

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen text-2xl text-neutral-600">
      <PiSmileySadThin className="text-9xl" />
      <h1>404</h1>
      <p className="text-sm">Page Not Found</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go Back Home
      </Link>
    </div>
  )
}
