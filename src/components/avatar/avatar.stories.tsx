import React, { ReactChild } from "react";
import { Avatar } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "components/avatar",
  component: Avatar,
  argTypes: {},
} as Meta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://i.imgur.com/XV9MZFA.jpg",
  size: "5rem",
};
