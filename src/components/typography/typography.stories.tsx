import React, { ReactChild } from "react";
import { Typography } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "components/typography",
  component: Typography,
  argTypes: {},
} as Meta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Hello",
  italic: false,
  bold: false,
  colour: "black",
};
