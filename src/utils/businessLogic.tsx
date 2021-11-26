import { MenuItem } from "typescript/MenuItem"

export function createNewItem(
  titleProvided?: string,
  imageSourceProvided?: string,
  priceProvided?: number
): MenuItem {
  const id = new Date().getTime()
  const title = titleProvided ? titleProvided : ""
  const imageSource = imageSourceProvided ? imageSourceProvided : "images/coming-soon.png"
  const price = priceProvided ? priceProvided : 0.0
  const quantity = 0

  const itemCreated = { id, imageSource, title, price, quantity }
  return itemCreated
}
