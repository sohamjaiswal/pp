import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Container } from ".";

export default {
  title: "components/container",
  component: Container,
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div style={{ backgroundColor: "red" }}>
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = { children: <div>Hi</div>, style: { backgroundColor: "green" } };

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: <div>Hi</div>,
  style: { backgroundColor: "green" },
};
