import React from "react";
import { Meta } from "@storybook/react";
import ProfileCard, { ProfileCardProps } from "./ProfileCard";
import "./ProfileCard.css";

export default {
  title: "Components/ProfileCard",
  tags: ["autodocs"],
  component: ProfileCard,
} as Meta;

export const Default = {
  args: {
    name: "Sze",
    title: "Onic BA",
    imageUrl:
      "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    posts: 133,
    followers: 154,
    following: 3,
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />,
};
