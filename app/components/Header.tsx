'use client'

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { IoMoonOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";


export default function Header() {

  const t = useTranslations('HeaderPage')

  const navLinks = [
    {name: t("HomeLink"), href: "/"},
    {name: t("DesPage"), href: "/destinations"},
  ]

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center border-b border-gray-100">
      <Image
        src="/Oman.png" 
        alt="oman logo" 
        width={100}
        height={100}
        />
        <ul className="flex gap-5 text-lg hover:">
          {
            navLinks.map(
              ((link, i) => {
                const isActive = pathname == link.href;
                return (<li key={i} className={`${isActive ? "text-blue-500 font-bold": "text-gray-900"}`}><Link href={link.href}>{link.name}</Link></li> )
              })
            )
          }
          
        </ul>

        <div className="flex items-center gap-11">
          <LanguageSelector />
          <IoMoonOutline className="cursor-pointer" />
        </div>

    </div>
  )
}