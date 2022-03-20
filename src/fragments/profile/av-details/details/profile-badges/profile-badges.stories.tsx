import React from "react";
import { ProfileBadges } from ".";
import { ComponentStory, Meta } from "@storybook/react";
import { FaGamepad, FaLinux } from "react-icons/fa";

export default {
  title: "fragments/profile/av-details/details/profile-badges",
  component: ProfileBadges,
  argTypes: {},
} as Meta<typeof ProfileBadges>;

const Template: ComponentStory<typeof ProfileBadges> = (args) => (
  <ProfileBadges {...args} />
);

export const Default = Template.bind({});
Default.args = {
  badges: [<FaGamepad />, <FaLinux />],
};
