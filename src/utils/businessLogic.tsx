import { MenuItem } from "typescript/MenuItem"

export function createNewItem(
  idProvided?: number,
  imageSourceProvided?: string,
  titleProvided?: string,
  priceProvided?: number
): MenuItem {
  const id = idProvided ? idProvided : new Date().getTime()
  const imageSource = imageSourceProvided ? imageSourceProvided : ""
  const title = titleProvided ? titleProvided : ""
  const price = priceProvided ? priceProvided : 0.0

  const itemCreated = { id, imageSource, title, price }
  return itemCreated
}
