import { Box, TextareaAutosize } from "@mui/material";
import React from "react";
import { Button } from "../stories/Button";

export const Feedback = () => {
  const rateNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box
      sx={{
        width: "720px",
        height: "100%",
        fontFamily: "sans-serif",
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        padding: "4%",
        borderRadius: "1%",
        "& h2": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      }}
    >
      <h2>How likely are you to anaswer this question?</h2>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          "& span": {
            padding: "10px 18px",
            textAlign: "center",
            border: "1px solid #75798a",
            borderRadius: "5px",
          },
          "& span:hover": {
            color: "white",
            background: "#1A2B63",
            cursor: "pointer",
            boxShadow:
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
          },
        }}
      >
        {rateNumbers.map((item, index) => (
          <span>{item}</span>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          color: "#75798a",
          fontSize: "14px",
        }}
      >
        <h4>Not likely at all</h4>
        <h4>Extremely likely</h4>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          "& h2": { fontSize: "16px", textAlign: "left" },
        }}
      >
        <h2>Tell us how we can approve</h2>
        <TextareaAutosize
          name="Solid"
          placeholder="Write ur message here..."
          style={{ width: "100%", height: "80px" }}
          //   variant="solid"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 0px",
        }}
      >
        <Button label="Skip" />
        <Button
          backgroundColor="#3457DC"
          label="Button"
          onClick={() => {}}
          primary
          size="medium"
        />
      </Box>
    </Box>
  );
};

export default Feedback;
