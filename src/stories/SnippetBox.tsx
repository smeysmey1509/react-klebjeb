import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import HamburgerButton from "./HamburgerButton";

export interface SnippetBoxProps {
  videoData: string[];
}

export const SnippetBox: React.FC<SnippetBoxProps> = ({ videoData }) => {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement[]>([]);

  const handlePlayPause = (index: number) => {
    const currentVideo = videoRef.current[index];
    if (currentVideo) {
      if (isPlaying === index) {
        currentVideo.pause();
        setIsPlaying(null);
      } else {
        if (isPlaying !== null) {
          videoRef.current[isPlaying]?.pause();
        }
        currentVideo.play();
        setIsPlaying(index);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2%",
        boxSizing: "border-box",
      }}
    >
      {videoData.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "347px",
              position: "relative",
              "& video": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <video
              ref={(el) => (videoRef.current[index] = el!)}
              src={item.video}
              autoPlay
              loop
              muted
            />
            <HamburgerButton
              isPlaying={isPlaying === index}
              onClick={() => handlePlayPause(index)}
            />
            {/* <Box
              component="button"
              sx={{
                width: "28px",
                height: "28px",
                position: "absolute",
                top: "5%",
                right: "5%",
                borderRadius: "50%",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "10px",
                opacity: "0.5",
              }}
              onClick={() => handlePlayPause(index)}
            >
              {isPlaying === index ? <FaPause /> : <FaPlay />}
            </Box> */}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              "& h2": {
                textAlign: "center",
                fontSize: "16px",
              },
              "& p": {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#545454",
                fontSize: "12px",
                whiteSpace: "break-spaces",
              },
              "& h3": {
                textAlign: "center",
                textDecoration: "underline",
                fontSize: "14px",
              },
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>{item.navigate}</h3>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SnippetBox;
