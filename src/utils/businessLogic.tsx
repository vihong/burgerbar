import { isProductAdvertised, isProductAvailable } from "enums"
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
  const isAvailable = isProductAvailable.NO
  const isAdvertised = isProductAdvertised.NO

  const itemCreated = { id, imageSource, title, price, quantity, isAvailable, isAdvertised }
  return itemCreated
}

export const checkIsBeingSelected = (itemBeingSelected: MenuItem, burger: MenuItem): boolean => {
  if (itemBeingSelected?.id === burger.id) return true
  return false
}
