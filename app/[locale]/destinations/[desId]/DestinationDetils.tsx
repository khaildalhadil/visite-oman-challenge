'use client'

import { CrowdColor } from '@/app/lib/constantValues'
import { useTranslations } from 'next-intl'
import { CiBookmark, CiLocationOn, CiShare2 } from 'react-icons/ci'
import Figures from './Figures'
import { useParams } from 'next/navigation'
import DestinatoinMoreDetils from './DestinatoinMoreDetils'

type Props = {
  destination: Destination
}
/**
 * 
 *{
      id: 'dest_0194',
      name: { en: 'Ibri Fort', ar: 'حصن عبري' },
      lat: 23.582836,
      lng: 56.64503,
      region: { en: 'Dhahira', ar: 'الظاهرة' },
      categories: [ 'culture' ],
      company: { en: 'Oman Heritage Sites', ar: 'مواقع التراث العماني' },
      avg_visit_duration_minutes: 360,
      ticket_cost_omr: 0,
      recommended_months: [
        1, 2,  3,  4, 5,
        6, 9, 10, 12
      ],
      crowd_level: 5
    }
 * @returns 
 */

const DestinationDetils = ({destination}: Props) => {

  const searchParams = useParams();
  const locale = searchParams.locale ?? "en";

  const t = useTranslations("DestinationsPage");
  const crowdState = t(`crowdLevels.${destination.crowd_level}`);
  
  const placeName = destination.name[locale as "en" | "ar"];
  const placeLocation = destination.region[locale as "en" | "ar"];

  return (
    <div>
      <div className='flex justify-between items-center'>

        <div>
          <h1 className='text-2xl font-bold mt-5 mb-2'>{placeName}</h1>

          <div className='flex gap-2 items-center mb-2'>
            <span
              className={`${CrowdColor[destination.crowd_level]} bg-gray-400/30 px-2 rounded-full `}
            >{crowdState}</span>
            <div className='flex gap-2 items-center'>
              <CiLocationOn />
              <span>{placeLocation}</span>
            </div>

          </div>

        </div>

        <div className='flex gap-3'>
          <CiBookmark className='border border-neutral-400 rounded-full text-4xl p-1 cursor-pointer hover:bg-neutral-100' />
          <CiShare2   className='border border-neutral-400 rounded-full text-4xl p-1 cursor-pointer hover:bg-neutral-100'/>
        </div>

      </div>

      <Figures />

      <DestinatoinMoreDetils destination={destination} />

    </div>
  )
}
export default DestinationDetils