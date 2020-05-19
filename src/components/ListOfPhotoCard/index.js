import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard {...photo} key={photo.id} />
      ))}
    </ul>
  );
};


