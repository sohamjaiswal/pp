import React from "react";
import { IconContext } from "react-icons";
import { accent } from "../../styles/colors";
import { IBadgeProps } from "./badge.types";

export const Badge = ({ icon, size, color = accent }: IBadgeProps) => {
  return (
    <IconContext.Provider
      value={{ className: "icon", size: `${size}rem`, color: color }}
    >
      {icon}
    </IconContext.Provider>
  );
};
