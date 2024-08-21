import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Avatar } from "../stories/Avatar";
import FormControlComponent from "./FormControlComponent";

const EditComponent = () => {
  const [avatar, setAvatar] = useState({
    alt: "",
    fallback: "",
    object: "cover",
    shape: "circle",
    size: 210,
    src: "",
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("avatar");
    if (savedSettings) {
      setAvatar(JSON.parse(savedSettings));
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };

  const handleChange = (field) => (value) => {
    setAvatar((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { type: "text", label: "Src", name: "src" },
    { type: "text", label: "Alt Text", name: "alt" },
    { type: "number", label: "Size", name: "size" },
    {
      type: "radio",
      label: "Shape",
      name: "shape",
      options: [
        { value: "circle", label: "Circle" },
        { value: "square", label: "Square" },
      ],
    },
    { type: "text", label: "Fallback", name: "fallback" },
    { type: "text", label: "Object Fit", name: "object" },
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
        <Avatar
          alt={avatar.alt}
          fallback={avatar.fallback}
          shape={avatar.shape}
          size={avatar.size}
          src={avatar.src}
          sx={{ "& img": { objectFit: avatar.object } }}
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
          values={avatar}
          setValues={(field, value) => handleChange(field)(value)}
          handleSave={handleSave}
        />
      </Box>
    </Box>
  );
};

export default EditComponent;
