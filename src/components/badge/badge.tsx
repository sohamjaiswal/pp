import React from "react";
import { IconContext } from "react-icons";
import { iconsColor } from "../../styles/colors";
import { IBadgeProps } from "./badge.types";

export const Badge = ({ icon, size }: IBadgeProps) => {
  return (
    <IconContext.Provider
      value={{ className: "icon", size: `${size}rem`, color: iconsColor }}
    >
      {icon}
    </IconContext.Provider>
  );
};
