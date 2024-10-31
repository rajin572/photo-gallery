"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://images.pexels.com/photos/28959278/pexels-photo-28959278/free-photo-of-a-flock-of-seagulls-soaring-in-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28955192/pexels-photo-28955192/free-photo-of-abstract-hexagonal-architecture-structure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10414211/pexels-photo-10414211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29021173/pexels-photo-29021173/free-photo-of-delicious-italian-pizza-with-basil-at-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27296502/pexels-photo-27296502/free-photo-of-a-woman-with-afro-hair-smiling-and-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28931988/pexels-photo-28931988/free-photo-of-cyclist-crossing-suspension-bridge-in-kyiv-ukraine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28291066/pexels-photo-28291066/free-photo-of-two-women-are-working-in-a-tea-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8998358/pexels-photo-8998358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29092532/pexels-photo-29092532/free-photo-of-chic-photographer-capturing-istanbul-charm.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27928248/pexels-photo-27928248/free-photo-of-processed-with-vsco-with-b5-preset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/27308352/pexels-photo-27308352/free-photo-of-a-wooden-path-leading-to-the-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/28951947/pexels-photo-28951947/free-photo-of-serene-seascape-with-sailboat-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14929745/pexels-photo-14929745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20398848/pexels-photo-20398848/free-photo-of-flock-of-seagulls-and-sailboats-anchored-in-the-bay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29084197/pexels-photo-29084197/free-photo-of-woman-in-white-dress-walking-on-a-tranquil-beach.jpeg",
  "https://images.pexels.com/photos/27893233/pexels-photo-27893233/free-photo-of-woman-in-shirt-photographing-with-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7780448/pexels-photo-7780448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/9638620/pexels-photo-9638620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3767346/pexels-photo-3767346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5177162/pexels-photo-5177162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3584951/pexels-photo-3584951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define breakpoints based on the length of images
  const columnsCountBreakPoints =
    images.length === 1
      ? { 350: 1, 600: 1, 1024: 1 }
      : images.length === 2
      ? { 350: 1, 600: 2, 1024: 2 }
      : images.length === 3
      ? { 350: 1, 600: 2, 1024: 3 }
      : { 350: 1, 600: 2, 1024: 3 };

  return (
    <div className="max-w-[1350px] w-[90%] mx-auto py-16">
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={400} // Set a default width for the image
              height={300} // Set a default height for the image
              style={{
                width: "100%",
                height: "auto",
                // maxHeight: "500px",
                margin: "0 auto",
              }}
              alt={`Gallery image ${i + 1}`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Page;
