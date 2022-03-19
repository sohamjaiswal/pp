import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { IconText } from "../icon-text";

import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <IconText icon={<FaCode />} label="Made with ❤️ by Soham" /> : <></>
      <IconText
        icon={<FaGithub />}
        label="All project files can be found on my github"
      />{" "}
      : <></>
    </div>
  );
};
