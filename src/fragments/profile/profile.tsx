import React from "react";
import { IProfileProps } from "./profile.types";

import "./profile.scss";
import { Avatar } from "../../components/avatar";
import { AvDetails } from "./av-details";

export const Profile = ({ avDetails, banner }: IProfileProps) => {
  return (
    <div className="profile">
      <div
        className="banner"
        style={{
          height: "20rem",
          width: "100%",
          background: `url(${banner})`,
        }}
      ></div>
      <AvDetails {...avDetails} />
    </div>
  );
};
