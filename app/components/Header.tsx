'use client'

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { IoMoonOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import useBearStore from "../store/useDarkMode";
import { BsSun } from "react-icons/bs";

export default function Header() {

  const t = useTranslations('HeaderPage')

  const navLinks = [
    {name: t("HomeLink"), href: "/"},
    {name: t("DesPage"), href: "/destinations"},
    {name: t("saved-Interests"), href: "/saved-Interests"},
    
  ]

  const themeLight = useBearStore(state => state.themeLight)
  const setTheme = useBearStore(state => state.setTheme)
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-gray-100">
      <Image
        src="/Oman.png" 
        alt="oman logo" 
        width={100}
        height={100}
        />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 text-lg">
            {
              navLinks.map(
                ((link, i) => {
                  const isActive = pathname === link.href;
                  return (<li key={i} className={`${isActive ? "text-blue-500 font-bold": ""}`}><Link href={link.href}>{link.name}</Link></li> )
                })
              )
            }
            
            <li className={''}><Link className="bg-blue-600 text-neutral-100 p-2 rounded cursor-pointer" href={"/planner"}>{t("Plan")}</Link></li>

          </ul>
        </nav>

        <div className="flex items-center gap-11">
          <LanguageSelector />
          {
            <button className="cursor-pointer" onClick={() => setTheme(!themeLight)}>
              {!themeLight ?
                <BsSun />
                : <IoMoonOutline  />
              }
            </button>
          }
        </div>

    </header>
  )
}