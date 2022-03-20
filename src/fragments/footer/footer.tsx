import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { IconText } from "../icon-text";

import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="visibleFooter">
        <IconText icon={<FaCode />} label="Made with ❤️ by Soham" />
        <IconText icon={<FaGithub />} label="Project files on GitHub" />{" "}
      </div>
    </div>
  );
};
