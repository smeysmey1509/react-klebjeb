import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Avatar } from "../stories/Avatar";
import { ProfileCard } from "../stories/ProfileCard";
import FormControlComponent from "./FormControlComponent";

const EditComponent = () => {
  const [profileCard, setProfileCard] = useState({
    age: "",
    description: "",
    imageUrl: "",
    name: "circle",
    title: 210,
    status: false,
    posts: 13,
    followers: 164,
    following: 6,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("profileCard");
    if (savedSettings) {
      setProfileCard(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("profileCard", JSON.stringify(profileCard));
  };

  const handleChange = (field) => (value) => {
    setProfileCard((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { type: "number", label: "Age", name: "age" },
    { type: "text", label: "Description", name: "description" },
    { type: "text", label: "Image Url", name: "imageUrl" },
    { type: "text", label: "Name", name: "name" },
    { type: "switch", label: "Status", name: "status" },
    { type: "text", label: "Title", name: "title" },
    { type: "number", label: "Posts", name: "posts" },
    { type: "number", label: "Followers", name: "followers" },
    { type: "number", label: "Following", name: "following" },
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
          age={profileCard.age}
          description={profileCard.description}
          imageUrl={profileCard.imageUrl}
          name={profileCard.name}
          status={profileCard.status}
          title={profileCard.title}
          followers={profileCard.followers}
          following={profileCard.following}
          posts={profileCard.posts}
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
