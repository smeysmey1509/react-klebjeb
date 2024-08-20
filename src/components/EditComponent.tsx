import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Avatar } from "ui-avatar-component";

const EditComponent = () => {
  const [avatarSrc, setAvatarSrc] = useState("");
  const [avatarAlt, setAvatarAlt] = useState("");
  const [avatarSize, setAvatarSize] = useState(350);
  const [avatarShape, setAvatarShape] = useState("circle");
  const [avatarFallback, setAvatarFallback] = useState("A");
  const [avatarObjectfit, setAvatarObjectfit] = useState("contain");

  useEffect(() => {
    // Load data from local storage
    const savedSettings = localStorage.getItem("avatarSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setAvatarSrc(settings.avatarSrc || "");
      setAvatarAlt(settings.avatarAlt || "");
      setAvatarSize(settings.avatarSize || 350);
      setAvatarShape(settings.avatarShape || "circle");
      setAvatarFallback(settings.avatarFallback || "A");
      setAvatarObjectfit(settings.avatarObjectfit || "contain");
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    // Save the form data to local storage
    localStorage.setItem(
      "avatarSettings",
      JSON.stringify({
        avatarSrc,
        avatarAlt,
        avatarSize,
        avatarShape,
        avatarFallback,
        avatarObjectfit,
      })
    );

    // Log the state to verify that it captures the latest changes
    console.log({
      avatarSrc,
      avatarAlt,
      avatarSize,
      avatarShape,
      avatarFallback,
      avatarObjectfit,
    });
  };

  const handleExport = () => {
    alert(123);
  };

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
          src={avatarSrc}
          alt={avatarAlt}
          size={avatarSize}
          shape={avatarShape}
          fallback={avatarFallback}
          sx={{
            "& img": {
              objectFit: avatarObjectfit,
            },
          }}
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
        <Box
          component="h2"
          sx={{
            color: "black",
            fontSize: "18px",
          }}
        >
          Edit Avatar Attributes
        </Box>
        <form onSubmit={handleSave}>
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={avatarSrc}
            onChange={(e) => setAvatarSrc(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Alt Text"
            variant="outlined"
            fullWidth
            value={avatarAlt}
            onChange={(e) => setAvatarAlt(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Size"
            variant="outlined"
            type="number"
            fullWidth
            value={avatarSize}
            onChange={(e) => setAvatarSize(Number(e.target.value))}
            margin="normal"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Shape</FormLabel>
            <RadioGroup
              aria-label="shape"
              name="shape"
              value={avatarShape}
              onChange={(e) => setAvatarShape(e.target.value)}
            >
              <FormControlLabel
                value="circle"
                control={<Radio />}
                label="Circle"
                sx={{
                  color: "black",
                }}
              />
              <FormControlLabel
                value="square"
                control={<Radio />}
                label="Square"
                sx={{
                  color: "black",
                }}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Fallback"
            variant="outlined"
            fullWidth
            value={avatarFallback}
            onChange={(e) => setAvatarFallback(e.target.value)}
            margin="normal"
          />
          {/* <TextField
            label="Object-fit"
            variant="outlined"
            fullWidth
            value={avatarObjectfit}
            onChange={(e) => setAvatarObjectfit(e.target.value)}
            margin="normal"
          /> */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </form>
        <Button
          sx={{
            width: "fit-content",
            marginTop: "10px",
          }}
          type="submit"
          variant="contained"
          color="warning"
          onClick={handleExport}
        >
          Import
        </Button>
      </Box>
    </Box>
  );
};

export default EditComponent;
