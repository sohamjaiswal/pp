import React, { ReactChild } from "react";
import { Background } from "./";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "components/background",
  component: Background,
  argTypes: {},
} as Meta<typeof Background>;

const Template: ComponentStory<typeof Background> = (args) => <Background />;

const stuff: ReactChild = <div className="stuff">lolol</div>;

export const Default = Template.bind({});
Default.args = {
  children: stuff,
};
