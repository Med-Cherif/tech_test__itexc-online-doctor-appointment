import React from "react";
import Skeleton from "../Skeleton";

interface TProps {
  cardsNumber: number;
}

const ProfileLoader = ({ cardsNumber }: TProps) => {
  return (
    <div className="profile-loader">
      {Array.from({ length: cardsNumber }).map((_, index) => {
        return <Skeleton key={index} />;
      })}
    </div>
  );
};

export default ProfileLoader;
