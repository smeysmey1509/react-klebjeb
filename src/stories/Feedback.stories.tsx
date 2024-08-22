import { Meta } from "@storybook/html";
import { Feedback } from "../stories/Feedback";

export default {
  title: "Components/Feedback",
  tags: ["autodocs"],
  component: Feedback,
} as Meta;

export const Defualt = {
  render: (args) => <Feedback {...args} />,
};
