import React, { ReactChild } from "react";
import { Main } from "./";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "pages/main",
  component: Main,
  argTypes: {},
} as Meta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  profile: {
    banner: "https://sohamjaiswal10.keybase.pub/background.jpg",
    avDetails: {
      avatar:
        "https://g.redditmedia.com/YAR8NQRfgeCqRQcuMtrk3uEO67sAnq9DLnmlmZTUiPo.gif?fm=mp4&mp4-fragmented=false&s=a98270069d63f5106ca0f375cf1bdff8",
      details: {
        name: "Abc Def",
        otherDetails: {
          location: "#223, Street 11, Phase 3B1",
          // discord: "TooMuchHam#0001",
          email: "sohamjaiswal10@gmail.com",
        },
      },
    },
  },
};
