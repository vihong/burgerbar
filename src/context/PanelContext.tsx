import { createContext } from "react"

interface PanelContextValue {
  isAddFormVisible: boolean
  setIsAddFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  isEditFormVisible: boolean
  setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default createContext<PanelContextValue>({
  isAddFormVisible: false,
  setIsAddFormVisible: () => {},
  isEditFormVisible: false,
  setIsEditFormVisible: () => {},
})
