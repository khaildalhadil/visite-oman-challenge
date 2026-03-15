'use client'

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl'

export default function LanguageSelector() {

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLanguage() {
      router.replace({pathname}, {locale: locale == "en" ? "ar": "en"})
  }
  
  return (
    <div>
      <button 
        className='cursor-pointer'
        onClick={switchLanguage} >{locale == "en" ? "العربية": "English"}</button>
    </div>
  )
}