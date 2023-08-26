export enum OrderBy {
  'mostViewed' = 'پربازدیدترین',
  'newest' = 'جدیدترین',
  'cheapest' = 'ارزان ترین',
  'expensive' = 'گران ترین',
  'bestselling' = 'پرفروش ترین',
}

export const orderByData: {
  id: number
  title: OrderBy
}[] = [
  { id: 1, title: OrderBy.mostViewed },
  { id: 2, title: OrderBy.newest },
  { id: 3, title: OrderBy.cheapest },
  { id: 4, title: OrderBy.expensive },
  { id: 5, title: OrderBy.bestselling },
]
