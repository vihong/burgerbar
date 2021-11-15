import { createContext } from "react"

interface OrderContextValue {
  isModeAdmin: boolean
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
}

export default createContext<OrderContextValue>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
})
