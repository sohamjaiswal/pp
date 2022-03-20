import React from "react";
import { Typography } from "../../../../../components/typography";
import { INameProps } from "./name.types";

export const Name = ({ name }: INameProps) => {
  return <Typography label={name} size={2} bold />;
};
