import React from "react";
import { Typography } from "../typography";
import { IIconTextProps } from "./icon-text.types";
import { IconContext } from "react-icons";
import { iconsColor } from "../../styles/colors";

export const IconText = ({
  spacing = 1,
  icon,
  label,
  size = 1,
}: IIconTextProps) => {
  return (
    <div
      className="iconText"
      style={{
        display: "flex",
        gap: `${spacing}rem`,
        alignItems: "center",
      }}
    >
      <IconContext.Provider
        value={{ className: "icon", size: `${size}rem`, color: iconsColor }}
      >
        {icon}
      </IconContext.Provider>
      <Typography label={label} bold size={size} />
    </div>
  );
};
