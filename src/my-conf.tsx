import React from "react";
import {
  FaGamepad,
  FaGithub,
  FaKeybase,
  FaLinux,
  FaReact,
  FaYarn,
} from "react-icons/fa";
import { Badge } from "./components/badge";
import { IMainProps } from "./templates/main/main.types";
export const myMainConf: IMainProps = {
  profile: {
    banner: "https://sohamjaiswal10.keybase.pub/background.jpg",
    avDetails: {
      avatar:
        "https://i.pinimg.com/originals/2f/64/c4/2f64c48944573c92558bec01c7d6c502.jpg",
      details: {
        name: "Your Name",
        otherDetails: {
          location: "Your Address",
          discord: "Your Discord",
          email: "Your Email",
        },
        badges: [<FaLinux />, <FaGamepad />],
      },
    },
  },
  aboutMe: {
    heading: "About Me",
    body: "Cupidatat exercitation non est ullamco proident pariatur est dolore deserunt commodo ut. Sint occaecat eu quis enim occaecat anim culpa exercitation in amet quis in. Sunt sit Lorem enim proident nulla nulla commodo nostrud deserunt ex Lorem. Est mollit voluptate excepteur aute incididunt. Pariatur magna culpa elit anim tempor. Cupidatat aliqua excepteur consectetur enim in aute.",
  },
  techShowcase: {
    heading: "My Tech",
    items: [
      <Badge icon={<FaLinux />} size={4} color="white" />,
      <Badge icon={<FaGithub />} size={4} color="white" />,
      <Badge icon={<FaKeybase />} size={4} color="white" />,
      <Badge icon={<FaYarn />} size={4} color="white" />,
      <Badge icon={<FaReact />} size={4} color="white" />,
    ],
  },
};
