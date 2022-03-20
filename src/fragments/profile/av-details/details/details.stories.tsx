import React from "react";
import { Details } from ".";
import { ComponentStory, Meta } from "@storybook/react";
import { FaLinux } from "react-icons/fa";

export default {
  title: "fragments/profile/av-details/details/details",
  component: Details,
  argTypes: {},
} as Meta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Soham Jaiswal",
  otherDetails: {
    location: "#223, Street 11",
  },
  badges: [<FaLinux />],
};
