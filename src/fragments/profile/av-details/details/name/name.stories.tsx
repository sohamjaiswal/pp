import React from "react";
import { Name } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/profile/av-details/details/name",
  component: Name,
  argTypes: {},
} as Meta<typeof Name>;

const Template: ComponentStory<typeof Name> = (args) => <Name {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Soham Jaiswal",
};
