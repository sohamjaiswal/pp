import React, { ReactChild } from "react";
import { TriangleBackground } from "./";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "components/triangle-background",
  component: TriangleBackground,
  argTypes: {},
} as Meta<typeof TriangleBackground>;

const Template: ComponentStory<typeof TriangleBackground> = (args) => (
  <TriangleBackground children={<>LOLerz</>} />
);

export const Default = Template.bind({});
