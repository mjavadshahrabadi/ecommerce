import { Slider } from '@/components/home/Slider'
import { OffersList } from '@/components/home/OffersList'
import { ShopSuggest } from '@/components/home/ShopSuggest'
import { Advertise } from '@/components/home/Advertise'
import { NewestProducts } from '@/components/home/Newest'
import { Categories } from '@/components/home/Categories'
import { Brands } from '@/components/home/Brands'
import { Bestselling } from '@/components/home/ Bestselling'
import { LatestArticles } from '@/components/home/ LatestArticles'
import { Benefits } from '@/components/home/Benefits'
import { Modal } from '@/components/ui/Modal'

export default function HomePage() {
  return (
    <section className="overflow-hidden">
      <Modal />
      <Slider />
      <OffersList />
      <ShopSuggest />
      <Advertise />
      <NewestProducts />
      <Categories />
      <Brands />
      <Bestselling />
      <LatestArticles />
      <Benefits />
    </section>
  )
}
