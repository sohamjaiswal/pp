import React from "react";
import {
  FaGamepad,
  FaGithub,
  FaLinux,
  FaReact,
  FaYarn,
  FaJsSquare,
  FaRust,
  FaPython,
  FaTerminal,
} from "react-icons/fa";
import { Badge } from "./components/badge";
import { IMainProps } from "./templates/main/main.types";
export const myMainConf: IMainProps = {
  profile: {
    banner: "https://wallpaperaccess.com/full/4357971.jpg",
    avDetails: {
      avatar:
        "https://g.redditmedia.com/YAR8NQRfgeCqRQcuMtrk3uEO67sAnq9DLnmlmZTUiPo.gif?fm=mp4&mp4-fragmented=false&s=a98270069d63f5106ca0f375cf1bdff8",
      details: {
        name: "Ham",
        otherDetails: {
          location: "In your nightmares",
          guilded: "guilded.gg/u/sosweetham",
          discord: "TooMuchHam#0001",
          email: "ham@kodski.com",
        },
        badges: [<FaLinux />, <FaGamepad />],
      },
    },
  },
  aboutMe: {
    heading: "About Me",
    body: "Cupidatat exercitation non est ullamco proident pariatur est dolore deserunt commodo ut. Sint occaecat eu quis enim occaecat anim culpa exercitation in amet quis in. Sunt sit Lorem enim proident nulla nulla commodo nostrud deserunt ex Lorem. Est mollit voluptate excepteur aute incididunt. Pariatur magna culpa elit anim tempor. Cupidatat aliqua excepteur consectetur enim in aute.",
  },
  langShowcase: {
    heading: "My Languages",
    items: [
      <Badge icon={<FaJsSquare />} size={4} color="white" />,
      <Badge icon={<FaRust />} size={4} color="white" />,
      <Badge icon={<FaPython />} size={4} color="white" />,
      <Badge icon={<FaTerminal />} size={4} color="white" />,
    ],
  },
  techShowcase: {
    heading: "My Tech",
    items: [
      <Badge icon={<FaLinux />} size={4} color="white" />,
      <Badge icon={<FaGithub />} size={4} color="white" />,
      <Badge icon={<FaYarn />} size={4} color="white" />,
      <Badge icon={<FaReact />} size={4} color="white" />,
    ],
  },
};
