import React from "react";
import { Avatar } from "../../../components/avatar";
import { IAvDetailsProps } from "./av-details.types";
import { Details } from "./details";

import "./av-details.scss";

export const AvDetails = ({ avatar, details }: IAvDetailsProps) => {
  return (
    <div className="avDetails">
      <Avatar image={avatar} size="10rem" />
      <Details {...details} />
    </div>
  );
};
