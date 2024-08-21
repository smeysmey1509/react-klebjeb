import React from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  age: number;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  imageUrl,
  description,
  age,
}) => {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`${name}'s profile picture`} />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{age}</span>
    </div>
  );
};

export default ProfileCard;
