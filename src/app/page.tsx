import { Slider } from '@/components/home/Slider'
import { OffersList } from '@/components/home/OffersList'
import { ShopSuggest } from '@/components/home/ShopSuggest'

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Slider />
      <OffersList />
      <ShopSuggest />
    </section>
  )
}
