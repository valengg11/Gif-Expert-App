import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=JBtxogybIE5eEvwZt5QhrY1uulrXJ77f`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="cardGrid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
