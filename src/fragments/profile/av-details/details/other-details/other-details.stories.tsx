import React from "react";
import { OtherDetails } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/profile/av-details/details/other-details",
  component: OtherDetails,
  argTypes: {},
} as Meta<typeof OtherDetails>;

const Template: ComponentStory<typeof OtherDetails> = (args) => (
  <OtherDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  location: "#223, Street 11",
};
