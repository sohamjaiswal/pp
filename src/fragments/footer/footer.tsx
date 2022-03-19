import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { IconText } from "../../components/icon-text";

import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <IconText icon={<FaCode />} label="Coded with ❤️ by Soham Jaiswal" /> :{" "}
      <></>
      <IconText
        icon={<FaGithub />}
        label="All project files can be found on my github"
      />{" "}
      : <></>
    </div>
  );
};
