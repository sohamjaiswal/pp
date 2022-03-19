import React from "react";
import { AvDetails } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/profile/av-details/av-details",
  component: AvDetails,
  argTypes: {},
} as Meta<typeof AvDetails>;

const Template: ComponentStory<typeof AvDetails> = (args) => (
  <AvDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar: "https://i.imgur.com/XV9MZFA.jpg",
  details: {
    name: "Soham Jaiswal",
    otherDetails: {
      location: "#223, Street 11",
    },
  },
};
