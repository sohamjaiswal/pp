import React from "react";

import useColorThief from "use-color-thief";

import { IAvatarProps } from "./avatar.types";
import { getColor } from "./avatar.logic";

export const Avatar = ({ image, size, color }: IAvatarProps) => {
  let ringColor = color ? getColor(image) : null;
  if (ringColor === null) {
    ringColor = "black";
  }
  return (
    <div
      className="avatar"
      style={{
        height: `${size}`,
        width: `${size}`,
        borderRadius: "50%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        border: `7px solid ${ringColor}`,
      }}
    ></div>
  );
};
