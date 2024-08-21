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
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />,
};

export const Mey = {
  args: {
    name: "Sze",
    title: "Frontend Developer",

    imageUrl:
      "https://api.duniagames.co.id/api/content/upload/file/6566039981677832023.jpg",
    description: "A passionate developer who loves coding and coffee.",
    age: 10,
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />,
};
