import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

interface HamburgerButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isPlaying,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
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
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: isPlaying ? 0 : 1,
            transform: isPlaying ? "scale(0.8)" : "scale(1)",
          }}
        >
          <FaPlay />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "absolute",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: isPlaying ? 1 : 0,
            transform: isPlaying ? "scale(1)" : "scale(0.5)",
            animation: isPlaying ? "rotate 0.5s ease-in-out" : "none",
          }}
        >
          <FaPause />
        </div>
      </button>
    </>
  );
};

export default HamburgerButton;
