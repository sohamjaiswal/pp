import React from "react";
import { addDecorator } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
export const parameters = {
  //layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator((Story) => (
  <Router>
    <Story />
  </Router>
));
