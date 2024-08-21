import React from "react";
import { Meta, Story } from "@storybook/react";
import AnalyticsChart from "./AnalyticsChart";
import "./AnalyticsChart.css";

const meta: Meta = {
  title: "Components/AnalyticsChart",
  component: AnalyticsChart,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: Story<{ data: Data }> = (args) => <AnalyticsChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 30, 40, 35, 45, 30, 50],
        color: "#ff5f7e",
      },
      {
        label: "Dataset 2",
        data: [30, 20, 25, 40, 35, 45, 25],
        color: "#f3a743",
      },
      {
        label: "Dataset 3",
        data: [25, 35, 30, 20, 30, 40, 45],
        color: "#2cc4b1",
      },
    ],
  },
};

export const CustomData = Template.bind({});
CustomData.args = {
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Custom Dataset 1",
        data: [15, 25, 35, 45, 55, 65, 75],
        color: "#6a1b9a",
      },
      {
        label: "Custom Dataset 2",
        data: [50, 40, 30, 20, 10, 20, 30],
        color: "#1b5e20",
      },
    ],
  },
};
