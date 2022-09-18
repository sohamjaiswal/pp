import React from "react";
import {
  FaGuilded,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDiscord,
} from "react-icons/fa";
import { IconText } from "../../../../icon-text";

import "./other-details.scss";
import { IOtherDetailsProps } from "./other-details.types";
import { ReactElement } from "react";

export const OtherDetails = ({
  location,
  discord,
  email,
  guilded,
}: IOtherDetailsProps) => {
  const Location: ReactElement[] = [
    location ? <IconText icon={<FaMapMarkerAlt />} label={location} /> : <></>,
    email ? <IconText icon={<FaEnvelope />} label={email} /> : <></>,
    guilded ? <IconText icon={<FaGuilded />} label={guilded} /> : <></>,
    discord ? <IconText icon={<FaDiscord />} label={discord} /> : <></>,
  ];
  return <div className="otherDetails">{Location}</div>;
};
