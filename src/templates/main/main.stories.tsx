import React, { ReactChild } from "react";
import { Main } from ".";
import { ComponentStory, Meta } from "@storybook/react";
import { FaGamepad, FaGithub, FaYarn, FaLinux, FaReact } from "react-icons/fa";
import { Badge } from "../../components/badge";

export default {
  title: "pages/main",
  component: Main,
  argTypes: {},
} as Meta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  profile: {
    banner: "https://wallpaperaccess.com/full/4357971.jpg",
    avDetails: {
      avatar:
        // "https://g.redditmedia.com/YAR8NQRfgeCqRQcuMtrk3uEO67sAnq9DLnmlmZTUiPo.gif?fm=mp4&mp4-fragmented=false&s=a98270069d63f5106ca0f375cf1bdff8",
        "https://i.pinimg.com/originals/2f/64/c4/2f64c48944573c92558bec01c7d6c502.jpg",
      details: {
        name: "Soham Jaiswal",
        otherDetails: {
          location: "#223, Street 11, Phase 3B1",
          discord: "TooMuchHam#0001",
          email: "sohamjaiswal10@gmail.com",
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
      <Badge icon={<FaYarn />} size={4} color="white" />,
      <Badge icon={<FaReact />} size={4} color="white" />,
    ],
  },
};
