import React from "react";
import { Typography } from "../../components/typography";
import { IIconTextProps } from "./icon-text.types";
import { IconContext } from "react-icons";
import { iconsColor } from "../../styles/colors";
import { Badge } from "../../components/badge";

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
      <Badge icon={icon} size={size} />
      <Typography label={label} bold size={size} />
    </div>
  );
};
