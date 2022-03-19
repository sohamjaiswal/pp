import { HTMLAttributes, ReactElement, ReactNode } from "react";

export interface IContainerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Children
   */
  children: ReactNode[] | ReactNode | ReactElement[] | ReactElement;
}
