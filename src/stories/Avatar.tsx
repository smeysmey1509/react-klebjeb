import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  shape?: "circle" | "square";
  fallback?: string;
  object?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src = "",
  alt = "Avatar",
  size = 50,
  shape = "circle",
  fallback = "A",
  object = "cover",
}) => {
  const avatarStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: shape === "circle" ? "50%" : "0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    fontSize: `${size / 2}px`,
    color: "#555",
    overflow: "hidden",
  };

  return (
    <div style={avatarStyle}>
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: object }}
        />
      ) : (
        fallback
      )}
    </div>
  );
};

export default Avatar;
