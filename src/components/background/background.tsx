import React from "react";

import ParticlesBg from "particles-bg";

import "./background.scss";
import { IBackgroundProps } from "./background.types";

export const Background = ({ children }: IBackgroundProps) => {
  return <ParticlesBg color="random" type="cobweb" bg={true} />;
};
