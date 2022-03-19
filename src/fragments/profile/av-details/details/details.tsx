import React from "react";
import { Name } from "./name";
import { IDetailsProps } from "./details.types";

import "./details.scss";
import { OtherDetails } from "./other-details";

export const Details = ({ name, otherDetails }: IDetailsProps) => {
  return (
    <div className="details">
      <Name name={name} />
      <OtherDetails {...otherDetails} />
    </div>
  );
};
