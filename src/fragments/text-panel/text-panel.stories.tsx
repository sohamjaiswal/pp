import React, { ReactChild } from "react";
import { TextPanel } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/text-panel",
  component: TextPanel,
  argTypes: {},
} as Meta<typeof TextPanel>;

const Template: ComponentStory<typeof TextPanel> = (args) => (
  <TextPanel {...args} />
);

const stuff: ReactChild = <div className="stuff">lolol</div>;

export const Default = Template.bind({});
Default.args = {
  heading: "About Me",
  body: "Aute deserunt culpa aliqua qui quis culpa minim quis nulla ea. Ea occaecat velit duis sit anim. Officia deserunt ipsum eu nulla sunt ipsum ea. Incididunt deserunt eiusmod sit minim consequat adipisicing ut. Et ad laboris sit commodo in in aliqua tempor aute aliqua nostrud aliquip laborum. Qui aliquip consequat duis ad non sunt ad. Deserunt aliquip duis fugiat quis.",
};
