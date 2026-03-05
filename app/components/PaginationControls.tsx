'use client'

import { useRouter, useSearchParams } from "next/navigation";


type Props = {
  hasNextPage: boolean,
  hasPrevPage: boolean
}

export default function PaginationControls({hasNextPage, hasPrevPage}: Props) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '12';

  return (
    <div className="p-5 text-center mt-3 " style={{direction: 'ltr'}}>
      <button
        className="bg-gray-300 px-2 py-1 rounded text-gray-800 cursor-pointer disabled:cursor-not-allowed mx-2 "
        onClick={() => router.push(`/destinations/?page=${Number(page) - 1}&per_page=${per_page}`)}
        disabled={!hasPrevPage}
      >
        ←</button>
      <span>{page} / { (8 +  Number(per_page)) * 2}</span>
      <button
        className="bg-green-500 px-2 py-1 rounded text-green-50 cursor-pointer disabled:cursor-not-allowed mx-2"
        onClick={() => router.push(`/destinations/?page=${Number(page) + 1}&per_page=${per_page}`)}
        disabled={!hasNextPage}
      >→</button>
    </div>
  )
}