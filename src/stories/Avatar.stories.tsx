import React from "react";
import { Meta } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    size: { control: { type: "number", min: 50, max: 200 } }, // Corrected range
    shape: { control: { type: "radio", options: ["circle", "square"] } },
    fallback: { control: "text" },
    object: { control: "text" },
  },
} as Meta;

export const Default = {
  args: {
    src: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    alt: "Avatarrrr",
    size: 200,
    shape: "circle",
    fallback: "sz",
    object: "cover",
  },
  render: (args) => Avatar(args),
};

export const Sza = {
  args: {
    src: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    alt: "Avatarrrr",
    size: 210,
    shape: "circle",
    fallback: "sz",
    object: "cover"
  },
  render:args => Avatar(args)
};

export const Kairi = {
  args: {
    src: "https://correcto.id/content/images/th1_2023032909031865528.jpg",
    alt: "Avatarrrr",
    size: 230,
    shape: "square",
    fallback: "sza",
    object: "cover"
  },
  render:args => Avatar(args)
};
