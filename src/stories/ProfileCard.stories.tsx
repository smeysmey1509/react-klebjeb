import React from "react";
import { Meta, Story } from "@storybook/react";
import ProfileCard, { ProfileCardProps } from "./ProfileCard";
import "./ProfileCard.css";

export default {
  title: "Components/ProfileCard",
  tags: ["autodocs"],
  component: ProfileCard,
} as Meta;

export const Default = {
  args: {
    name: "John Doe",
    title: "Backend Developer",
    imageUrl: "https://via.placeholder.com/100",
    description: "A passionate developer who loves coding and coffee.",
    age: 14,
    status: true,
    posts: 13,
    followers: 154,
    following: 3,
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />,
};

export const Mey = {
  args: {
    name: "Sze",
    title: "Frontend Developer",

    imageUrl:
      "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    description: "A passionate developer who loves coding and coffee.",
    age: 10,
    status: true,
    posts: 13,
    followers: 154,
    following: 3,
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />,
};
