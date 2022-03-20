import React from "react";
import { Typography } from "../../components/typography";
import { accent } from "../../styles/colors";
import { ShowcaseView } from "./showcase-view";

import "./showcase.scss";
import { IShowcaseProps } from "./showcase.types";

export const Showcase = ({ heading, items }: IShowcaseProps) => {
  return (
    <div className="showcase">
      <Typography label={heading} bold size={2} colour={accent} />
      <ShowcaseView items={items} />
    </div>
  );
};
