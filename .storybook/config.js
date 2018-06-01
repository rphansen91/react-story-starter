import { configure } from "@storybook/react";
import { setOptions } from '@storybook/addon-options';

const req = require.context("../src/components", true, /\.stories\.js$/);
const name = "Blink Webview";

setOptions({ name });

function loadStories() {
  require("./welcome");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
