import { ID } from "./AtomicType"

export interface MenuItem {
  id?: ID
  imageSource?: string
  title?: string
  price: number
  quantity: number
  isAvailable: string
  isAdvertised: string
}
