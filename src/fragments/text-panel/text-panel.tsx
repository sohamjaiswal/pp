import React from "react";
import { Typography } from "../../components/typography";
import { accent } from "../../styles/colors";
import { ITextPanelProps } from "./text-panel.types";

import "./text-panel.scss";

export const TextPanel = ({ heading, body }: ITextPanelProps) => {
  return (
    <div className="textPanel">
      <Typography label={heading} bold size={1.5} colour={accent} />
      <Typography label={body} bold size={1} />
    </div>
  );
};
