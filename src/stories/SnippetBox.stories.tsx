import React from "react";
import SnippetBox, { SnippetBoxProps } from "../stories/SnippetBox"; // Adjust path as necessary
import { Meta, Story } from "@storybook/react";

const videoData = [
  {
    video:
      "https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/0725b263-cc8b-4454-8c2d-c8e0128219de/6e8fdcfc-a1c6-471c-a936-173f4f01126f/main.mp4?fastly_token=NjZjNzBlOGRfOTA3NzQ1NjQ1MDI2MDFkZGYxNDRkNmJhYWI3NjRkNGZjMTM4ZTBjMWY5MjE2ODM2NWQyYTRhOWM2MjliZDM4ZV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8wNzI1YjI2My1jYzhiLTQ0NTQtOGMyZC1jOGUwMTI4MjE5ZGUvNmU4ZmRjZmMtYTFjNi00NzFjLWE5MzYtMTczZjRmMDExMjZmL21haW4ubXA0",
    title: "Personalization",
    description:
      "Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.",
    navigate: "Discover The Collection",
  },
  {
    video:
      "https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/ac1e5cb8-b507-47ab-87e7-87a8a8107250/19e0d18a-998a-4da4-88ac-766eefa0a0e3/main.mp4?fastly_token=NjZjNzEyMjBfNjQwMmExOWIwNjIyMGM0Y2I2MWFmYzlhOTU0MDJiYjNhNjgxMjE1ZTMwZDA3N2M1MGFlNWQwNTE1MTZjNDJiMV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS9hYzFlNWNiOC1iNTA3LTQ3YWItODdlNy04N2E4YTgxMDcyNTAvMTllMGQxOGEtOTk4YS00ZGE0LTg4YWMtNzY2ZWVmYTBhMGUzL21haW4ubXA0",
    title: "Packaging",
    description:
      "Choose between our online exclusive tote or boutique shopping bag to give your order the perfect finish.",
    navigate: "Explore Gucci’s Packaging",
  },
  {
    video:
      "https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/47c56c60-c192-4db9-bf76-52d867065dfa/d88615ee-8ab4-41f9-a76d-fb447be1ec69/main.mp4?fastly_token=NjZjNzEyM2VfZGMxMzJmOWExODIwNmQ2NjE1OTU4OWM1M2VjYTAxYTYxYTA2M2VjMjIyZmQzY2JhODAxZWIzMGQ4MWRlZGFkM18vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS80N2M1NmM2MC1jMTkyLTRkYjktYmY3Ni01MmQ4NjcwNjVkZmEvZDg4NjE1ZWUtOGFiNC00MWY5LWE3NmQtZmI0NDdiZTFlYzY5L21haW4ubXA0",
    title: "Collect In Store",
    description:
      "Order online and collect your order from your preferred Gucci boutique.",
    navigate: "Discover How",
  },
];

export default {
  title: "Components/SnippetBox",
  component: SnippetBox,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  args: {
    videoData,
  },
  render: (args: SnippetBoxProps) => SnippetBox(args),
};
