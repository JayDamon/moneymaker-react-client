import { FC, HTMLAttributes } from "react";
import { BrowserRouter } from "react-router-dom";

export const wrapper: FC<HTMLAttributes<HTMLElement>> = ({children}) => (
  <BrowserRouter>{children}</BrowserRouter>
);