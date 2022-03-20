import React from "react";
import { Typography } from "../../components/typography";

import "./not-found.scss";

export const NotFound = () => {
  return (
    <div className="notFound">
      <Typography label="404" size={10} bold />
      <Typography
        label="The Content you Requested Could Not Be Found"
        size={3}
        italic
      />
    </div>
  );
};
