import React, { ReactChild } from "react";
import { Profile } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/profile",
  component: Profile,
  argTypes: {},
} as Meta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

const stuff: ReactChild = <div className="stuff">lolol</div>;

export const Default = Template.bind({});
Default.args = {
  banner: "https://sohamjaiswal10.keybase.pub/background.jpg",
  avDetails: {
    avatar: "https://i.imgur.com/XV9MZFA.jpg",
    details: {
      name: "Your Name",
      otherDetails: {
        location: "Your Address",
      },
    },
  },
};
