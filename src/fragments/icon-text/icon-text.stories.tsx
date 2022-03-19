import React, { ReactChild } from "react";
import { IconText } from ".";
import { ComponentStory, Meta } from "@storybook/react";

import { FaHtml5 } from "react-icons/fa";

export default {
  title: "components/icon-text",
  component: IconText,
  argTypes: {},
} as Meta<typeof IconText>;

const Template: ComponentStory<typeof IconText> = (args) => (
  <IconText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  spacing: 1,
  icon: <FaHtml5 />,
  label: "HTML",
  size: 1,
};
