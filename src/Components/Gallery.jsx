import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../Assets/Gallery/Raven-Blue.jpg";
import img2 from "../Assets/Gallery/Raven-Pink.jpg";
import img3 from "../Assets/Gallery/Raven-Yellow.jpg";
import img4 from "../Assets/Gallery/RavenCrown.jpg";
import img5 from "../Assets/Gallery/RavenTree.jpg";
import img6 from "../Assets/Gallery/RavenPost.jpeg";
import img7 from "../Assets/Gallery/RavenRaven.jpg";

const images = [
  {
    original: img1,
    thumbnail: img1,
    
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
  {
    original: img6,
    thumbnail: img6,
  },
  {
    original: img7,
    thumbnail: img7,
  },
];

export const Gallery = () => {
  return (
    <ImageGallery
      items={images}
      thumbnailPosition={"left"}
      showPlayButton={false}
      disableThumbnailScroll={true}
      
    />
  );
};
