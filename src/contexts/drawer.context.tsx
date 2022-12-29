import { createContext, FC, HTMLAttributes, useState } from "react"

export type DrawerContextType = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const DrawerProvider: FC<HTMLAttributes<HTMLBaseElement>> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const value: DrawerContextType = { isDrawerOpen, setIsDrawerOpen }

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}
