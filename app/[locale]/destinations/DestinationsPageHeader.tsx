import { useTranslations } from "next-intl"

export default function DestinationsPageHeader() {

  const t = useTranslations("DestinationsPage")

  return (
    <h1 className="text-2xl my-12 font-bold">
      {t("title")}
    </h1>
  )
}