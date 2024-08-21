import React from "react";
import { Meta } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  tags: ["autodocs"],
  component: Avatar,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    size: { control: { type: "number", min: 50, max: 200 } },
    shape: { control: { type: "radio", options: ["circle", "square"] } },
    fallback: { control: "text" },
    object: { control: "text" },
    status: { control: "boolean" },
  },
} as Meta;

export const Sze = {
  args: {
    src: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    alt: "Avatarrrr",
    size: 210,
    shape: "circle",
    fallback: "sze",
    object: "cover",
  },
  render: (args: AvatarProps) => <Avatar {...args} />,
};

export const Kairi = {
  args: {
    src: "https://media.suara.com/pictures/970x544/2024/03/30/64518-onic-kairi.jpg",
    alt: "kairi",
    size: 230,
    shape: "circle",
    fallback: "kairi",
    object: "cover",
  },
  render: (args: AvatarProps) => <Avatar {...args} />,
};
