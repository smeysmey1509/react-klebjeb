import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Avatar } from "../stories/Avatar";
import FormControlComponent from "./FormControlComponent";
import ProfileCard from "../stories/ProfileCard";

const EditComponent = () => {
  const [profileCard, setProfileCard] = useState({
    followers: 1,
    following: 5,
    imageUrl: "",
    name: "",
    posts: 13,
    title: "",
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("profileCard");
    if (savedSettings) {
      setProfileCard(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("profileCard", JSON.stringify(profileCard));
  };

  const handleChange = (field: string) => (value: any) => {
    setProfileCard((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { type: "number", label: "Followers", name: "followers" },
    { type: "number", label: "Following", name: "following" },
    { type: "text", label: "ImageUrl", name: "imageUrl" },
    { type: "text", label: "Name", name: "name" },
    { type: "number", label: "Posts", name: "posts" },
    { type: "text", label: "Title", name: "title" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ProfileCard
          followers={profileCard.followers}
          following={profileCard.following}
          imageUrl={profileCard.imageUrl}
          name={profileCard.name}
          posts={profileCard.posts}
          title={profileCard.title}
        />
      </Box>
      <Box
        sx={{
          width: "20%",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Box component="h2" sx={{ color: "black", fontSize: "18px" }}>
          Edit Attributes
        </Box>
        <FormControlComponent
          fields={fields}
          values={profileCard}
          setValues={(field, value) => handleChange(field)(value)}
          handleSave={handleSave}
        />
      </Box>
    </Box>
  );
};

export default EditComponent;
