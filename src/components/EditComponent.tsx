// EditComponent.tsx

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Avatar, { AvatarProps } from "../stories/Avatar";
import ProfileCard, { ProfileCardProps } from "../stories/ProfileCard";
import FormControlComponent from "./FormControlComponent";
import { generateFieldsFromAttributes } from "../utils/utils";

const EditComponent = () => {
  const [attributes, setAttributes] = useState<ProfileCardProps>(
    ProfileCard.getDefaultAttributes()
  );

  useEffect(() => {
    const savedSettings = localStorage.getItem("profileCard");
    if (savedSettings) {
      setAttributes(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("profileCard", JSON.stringify(attributes));
  };

  const handleChange = (field: keyof AvatarProps) => (value: any) => {
    setAttributes((prev) => ({ ...prev, [field]: value }));
  };

  const fields = generateFieldsFromAttributes(attributes);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
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
        {/* <ProfileCard {...attributes} /> */}
        <ProfileCard
          followers={154}
          following={3}
          imageUrl="https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg"
          name="Sze"
          posts={133}
          title="Onic BA"
        />
      </Box>
      <Box
        sx={{
          width: "40%",
          height: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Box
          component="h2"
          sx={{ color: "black", fontSize: "18px", padding: "10px" }}
        >
          Edit Attributes
        </Box>
        <FormControlComponent
          fields={fields}
          values={attributes}
          setValues={(field, value) =>
            handleChange(field as keyof ProfileCardProps)(value)
          }
          handleSave={handleSave}
        />
      </Box>
    </Box>
  );
};

export default EditComponent;
