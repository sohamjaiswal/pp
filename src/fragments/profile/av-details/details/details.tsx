import React from "react";
import { Name } from "./name";
import { IDetailsProps } from "./details.types";

import "./details.scss";
import { OtherDetails } from "./other-details";
import { ProfileBadges } from "./profile-badges";

export const Details = ({ name, otherDetails, badges }: IDetailsProps) => {
  const Badges = badges ? <ProfileBadges badges={badges} /> : <></>;
  return (
    <div className="details">
      <div className="mainDetails">
        <Name name={name} />
        <OtherDetails {...otherDetails} />
      </div>
      <div className="extendedDetails">{Badges}</div>
    </div>
  );
};
