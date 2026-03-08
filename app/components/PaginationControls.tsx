'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { Per_Page } from "../lib/constantValues";


type Props = {
  hasNextPage: boolean,
  hasPrevPage: boolean,
  numberOfPages: number
}

export default function PaginationControls({hasNextPage, hasPrevPage, numberOfPages}: Props) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? Per_Page;
  const region = searchParams.get('region') ?? "all"
  const category = searchParams.get('category') ?? "all"
  const season = searchParams.get('season') ?? "all"
  const sort = searchParams.get('sort') ?? "all"

  const paramsAddPage = new URLSearchParams({
    page: String(Number(page) + 1),
    per_page: String(per_page),
    region: region,
    category: category,
    season: season,
    sort: sort
  })

  const paramsBackPage = new URLSearchParams({
    page: String(Number(page) - 1),
    per_page: String(per_page),
    region: region,
    category: category,
    season: season,
    sort: sort
  })


  return (
    <div className="p-5 text-center mt-3 " style={{direction: 'ltr'}}>
      <button
        className="bg-gray-300 px-2 py-1 rounded text-gray-800 cursor-pointer disabled:cursor-not-allowed mx-2 "
        onClick={() => router.push(`/destinations/?${paramsBackPage.toString()}`)}
        disabled={!hasPrevPage}
      >
        ←</button>
      <span>{page} / {numberOfPages}</span>
      
      <button
        className="bg-green-500 px-2 py-1 rounded text-green-50 cursor-pointer disabled:cursor-not-allowed mx-2"
        onClick={() => router.push(`/destinations/?${paramsAddPage.toString()}`)}
        disabled={!hasNextPage}
      >→</button>
    </div>
  )
}