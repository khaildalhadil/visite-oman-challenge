'use client'

import { useRef, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import useClickOutside from '../hooks/useClickOutside'
import { useRouter, useSearchParams } from 'next/navigation'
import { Per_Page } from '../lib/constantValues'

type Props = {
  selectName: string,
  options: string[],
  filterKey: string
}

const SelectDropdown = ({selectName, options, filterKey}: Props) => {
  
  const ref = useRef<HTMLDivElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectName);  

  const router = useRouter();
  const searchParams = useSearchParams();
  const region = searchParams.get('region') ?? "all"
  const category = searchParams.get('category') ?? "all"
  const season = searchParams.get('season') ?? "all"

  // console.log(searchParams);
  
  function hendleChangeRoute(value: string) {
    setShowDropdown(false);
    setSelectedOption(value);

    let params: URLSearchParams | string = "";
    
    if (filterKey === "region") {
      params = new URLSearchParams({
        page: "1",
        per_page: Per_Page.toString(),
        "category": category,
        "season": season,
        [filterKey]: value
      })
    }
    else if(filterKey === "category") {
      params = new URLSearchParams({
        page: "1",
        per_page: Per_Page.toString(),
        "region": region,
        "season": season,
        [filterKey]: value,
      })
    }
    else if(filterKey === "season") {
      params = new URLSearchParams({
        page: "1",
        per_page: Per_Page.toString(),
        "region": region,
        "category": category,
        [filterKey]: value
      })
    }
    
    
    router.push(`/destinations/?${params.toString()}`);
  }

  useClickOutside(ref, () => setShowDropdown(false));

  const dropdownContent = (
    <div 
      ref={ref}
      className=' absolute top-0 left-0 mt-10 bg-neutral-50 z-30 w-full border border-neutral-400 rounded p-2 '
      >
      {Object.entries(options).map(([key, value]) => (
        <div 
          key={key} 
          className='hover:bg-neutral-200 cursor-pointer p-2 ' 
          onClick={()=> hendleChangeRoute(value)} >
          {value}
        </div>
      ))}
    </div>
  )

  return (
    <div 
      className='h-8 w-60 border border-neutral-400 px-3 py-2 rounded flex justify-between items-center  cursor-pointer relative' 
      onClick={() => setShowDropdown(!showDropdown)}
      >
      {selectedOption}
      <FaCaretDown className={` transition  ${showDropdown ? "rotate-180" : ""}`} />

      {showDropdown && dropdownContent}
    </div>
  )
}

export default SelectDropdown