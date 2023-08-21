import { Slider } from '@/components/home/Slider'
import { OffersList } from '@/components/home/OffersList'
import { ShopSuggest } from '@/components/home/ShopSuggest'
import { Advertise } from '@/components/home/Advertise'
import { NewestProducts } from '@/components/home/Newest'
import { Categories } from '@/components/home/Categories'
import { Brands } from '@/components/home/Brands'

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Slider />
      <OffersList />
      <ShopSuggest />
      <Advertise />
      <NewestProducts />
      <Categories />
      <Brands />
    </section>
  )
}
