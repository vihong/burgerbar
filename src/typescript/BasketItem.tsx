import { ID } from "./AtomicType"

export interface BasketItem {
  id?: ID
  title?: string
  imageSource?: string
  price: number
  quantity: number
  isAvailable: string
}
