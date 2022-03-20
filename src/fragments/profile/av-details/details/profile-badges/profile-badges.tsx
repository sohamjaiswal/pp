import React from "react";
import { Badge } from "../../../../../components/badge";
import { IProfileBadgesProps } from "./profile-badges.types";

import "./profile-badges.scss";

export const ProfileBadges = ({ badges }: IProfileBadgesProps) => {
  return (
    <div className="profileBadges">
      {badges.map((b, i) => (
        <Badge icon={b} size={2} key={i} />
      ))}
    </div>
  );
};
