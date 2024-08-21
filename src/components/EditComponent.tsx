import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Avatar } from "ui-avatar-component";
import { ProfileCard } from "../stories/ProfileCard";
import FormControlComponent from "./FormControlComponent";

const EditComponent = () => {
  const [avatarSettings, setAvatarSettings] = useState({});

  useEffect(() => {
    const savedSettings = localStorage.getItem("avatarSettings");
    if (savedSettings) {
      setAvatarSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("avatarSettings", JSON.stringify(avatarSettings));
  };

  const handleChange = (field) => (value) => {
    setAvatarSettings((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { type: "text", label: "description", name: "description" },
    { type: "text", label: "imageUrl", name: "imageUrl" },
    { type: "text", label: "name", name: "name" },
    { type: "text", label: "title", name: "title" },
    { type: "number", label: "age", name: "age" },
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
          description="A passionate developer who loves coding and coffee."
          imageUrl="https://via.placeholder.com/100"
          name="John Doe"
          title="Backend Developer"
          age={10}
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
          Edit Avatar Attributes
        </Box>
        <FormControlComponent
          fields={fields}
          values={avatarSettings}
          setValues={(field, value) => handleChange(field)(value)}
          handleSave={handleSave}
        />
      </Box>
    </Box>
  );
};

export default EditComponent;
