import { MenuItem } from "typescript/MenuItem"

export function createNewItem(): MenuItem {
  const id = new Date().getTime()
  const imageSource = ""
  const title = "Tapez le nom de votre produit"
  const price = 0.0

  const itemCreated = { id, imageSource, title, price }
  return itemCreated
}
