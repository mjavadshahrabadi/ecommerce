import { Slider } from '@/components/home/Slider'
import { OffersList } from '@/components/home/OffersList'
import { ShopSuggest } from '@/components/home/ShopSuggest'
import { Advertise } from '@/components/home/advertise'
import { NewestProducts } from '@/components/Newest'

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Slider />
      <OffersList />
      <ShopSuggest />
      <Advertise />
      <NewestProducts />
    </section>
  )
}
