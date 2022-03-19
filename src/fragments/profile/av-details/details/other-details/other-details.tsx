import React from "react";
import { FaDiscord, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IconText } from "../../../../icon-text";

import "./other-details.scss";
import { IOtherDetailsProps } from "./other-details.types";
import { ReactElement } from "react";

export const OtherDetails = ({
  location,
  discord,
  email,
}: IOtherDetailsProps) => {
  const Location: ReactElement[] = [
    location ? <IconText icon={<FaMapMarkerAlt />} label={location} /> : <></>,
    discord ? <IconText icon={<FaDiscord />} label={discord} /> : <></>,
    email ? <IconText icon={<FaEnvelope />} label={email} /> : <></>,
  ];
  return <div className="otherDetails">{Location}</div>;
};
