import React from "react";
import { Sample } from "./";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "components/sample",
  component: Sample,
  argTypes: {},
} as Meta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const SampleButton1 = Template.bind({});
SampleButton1.args = { label: "my sample button" };

export const SampleButton2 = Template.bind({});
SampleButton2.args = { label: "other label", style: { color: "green" } };
