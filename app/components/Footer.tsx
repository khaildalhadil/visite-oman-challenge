'use client'

import { useTranslations } from "next-intl";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { RxGithubLogo } from "react-icons/rx";



export default function Footer() {

  const t = useTranslations("footer");

  return (
    <footer className=" py-4 text-center  border-t border-neutral-200 pt-10">
      <div className="text-3xl">
        {t("logo")}
      </div>
      <div>
        <ul className="flex justify-center gap-20 my-10">
          <li><Link href="/"> {t("home")}</Link></li>
          <li><Link href="/about"> {t("about")}</Link></li>
          <li><Link href="/destinations"> {t("destinations")}</Link></li>
          <li><Link href="/contact"> {t("contact")}</Link></li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center gap-11 my-10 text-2xl">
          <li><Link href="/"><CiInstagram /></Link></li>
          <li><Link href="/"><CiFacebook /></Link></li>
          <li><Link href="/"><CiTwitter /></Link></li>
          <li><Link href="/"><RxGithubLogo /> </Link></li>
        </ul>
      </div>
      <p>&copy; 2026 Make By Khalid Alhadi</p>
    </footer>
  )
}
