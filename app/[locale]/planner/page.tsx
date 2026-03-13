import Link from 'next/link';
import { LiaTripadvisor } from 'react-icons/lia';
import AllPlan from './AllPlan';
import { getPlaces } from '@/app/lib/data';

export default async function page() {
  
  const allPlaces: Destination[] = await getPlaces();

  return (
    <div>
      <AllPlan allPlaces={allPlaces} />
    </div>
  )
}
