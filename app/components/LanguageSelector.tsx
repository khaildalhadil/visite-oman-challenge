'use client'
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl'
// import { useSearchParams } from 'next/navigation';

export default function LanguageSelector() {

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  // const perPage = searchParams.get('per_page');

  function switchLanguage() {
      router.replace({pathname}, {locale: locale == "en" ? "ar": "en"})
    // router.replace({pathname}, {locale: locale == "en" ? `ar?page=${page}&per_page=${perPage}`: `en?page=${page}&per_page=${perPage}`})
  }
  
  return (
    <div>
      <button 
        className='cursor-pointer'
        onClick={switchLanguage} >{locale == "en" ? "العربية": "English"}</button>
    </div>
  )
}