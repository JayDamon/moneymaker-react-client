import { createContext, FC, HTMLAttributes, useState } from "react";

export type UserContextType = {
  isUserOptionsOpen: boolean;
  setIsUserOptionsOpen: (isOpen: boolean) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<HTMLAttributes<HTMLBaseElement>> = ({ children }) => {
  const [isUserOptionsOpen, setIsUserOptionsOpen] = useState<boolean>(false);

  const value: UserContextType = { isUserOptionsOpen, setIsUserOptionsOpen };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}