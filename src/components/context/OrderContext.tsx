import { createContext } from "react"
import { MenuItems } from "typescript/MenuItems"

interface OrderContextValue {
  isModeAdmin?: boolean
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
  menuItems?: MenuItems[]
  setMenuItems?: any
}

export default createContext<OrderContextValue>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  menuItems: [],
  setMenuItems: () => {},
})
