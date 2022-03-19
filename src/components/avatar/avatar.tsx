import React from "react";

import useColorThief from "use-color-thief";

import { IAvatarProps } from "./avatar.types";

export const Avatar = ({ image, size }: IAvatarProps) => {
  let { color } = useColorThief(image, {
    format: "hex",
    colorCount: 10,
    quality: 10,
  });
  if (color === null) {
    color = "black";
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
        border: `7px solid ${color}`,
      }}
    ></div>
  );
};
