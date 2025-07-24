import React from "react";
import "../assets/css/photoOfDay.css";

const imageCount = 20;
const baseURL = "https://picsum.photos/1080/1920?random=";

const allImages = Array.from({ length: imageCount }, (_, i) => `${baseURL}${i + 1}`);

function splitIntoColumns(arr, columns) {
  const result = Array.from({ length: columns }, () => []);
  arr.forEach((img, i) => {
    result[i % columns].push(img);
  });
  return result;
}

export default function PhotoOfDay() {
  const columns = splitIntoColumns([...allImages, ...allImages], 6); 

  return (
    <div className="photoofday-container">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`slider-column ${index % 2 === 0 ? "scroll-up" : "scroll-down"}`}
        >
          <div className="slider-track">
            {column.map((src, i) => (
              <div className="slide" key={i}>
                <img src={src} alt={`slide-${index}-${i}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
