import { createContext } from "react"
import { ID } from "typescript/AtomicType"
import { BasketItem } from "typescript/BasketItem"
import { MenuItem } from "typescript/MenuItem"
import { createNewItem } from "utils/businessLogic"

interface OrderContextValue {
  isModeAdmin: boolean
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: MenuItem[]
  handleAdd: (itemCreated: MenuItem, userName: string) => void
  handleDelete: (id: number | undefined, userName: string) => void
  handleEdit: (itemToEdit: MenuItem, userName: string) => void
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
  itemBeingSelected: MenuItem
  setItemBeingSelected: React.Dispatch<React.SetStateAction<MenuItem>>
  titleEditBoxRef: React.MutableRefObject<any>
  isAddFormVisible: boolean
  setIsAddFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  isEditFormVisible: boolean
  setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  handleAddToBasket: (burger: MenuItem) => void
  basket: BasketItem[]
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>
  handleDeleteFromBasket: (id: ID) => void
  name?: string
  isInitialLoadingDone: boolean
}

export default createContext<OrderContextValue>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  menuItems: [],
  setMenuItems: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  itemBeingSelected: createNewItem(),
  setItemBeingSelected: () => {},
  titleEditBoxRef: { current: undefined },
  isAddFormVisible: false,
  setIsAddFormVisible: () => {},
  isEditFormVisible: false,
  setIsEditFormVisible: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  handleAddToBasket: () => {},
  basket: [],
  setBasket: () => {},
  handleDeleteFromBasket: () => {},
  name: "",
  isInitialLoadingDone: true,
})
