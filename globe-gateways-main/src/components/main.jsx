import Navbar from "./navbar";
import Template from "./template";
import { React,useEffect, useState } from "react";

export default function Main() {
  const json = [
  {
    title: "Manali",
    subTitle: "Where Mountains Whisper Peace",
    subTitle2: "Where Mountains Whisper Peace",
    price: 19000,
    image: "../src/assets/images/agra/agra.png",
    subImages: [
      "http://picsum.photos/3840/2160?random=101",
      "http://picsum.photos/3840/2160?random=102",
      "http://picsum.photos/3840/2160?random=103",
      "http://picsum.photos/3840/2160?random=104",
      "http://picsum.photos/3840/2160?random=105"
    ],
    description: "Nestled in Himachal, Manali offers snowy peaks, pine forests, and a serene retreat from the busy world."
  },
//   {
//     title: "Spiti Valley",
//     subTitle: "Where Silence Paints the Sky",
//     subTitle2: "Where Silence Paints the Sky",
//     price: 21000,
//     image: "http://picsum.photos/3840/2160?random=2",
//     subImages: [
//       "http://picsum.photos/3840/2160?random=106",
//       "http://picsum.photos/3840/2160?random=107",
//       "http://picsum.photos/3840/2160?random=108",
//       "http://picsum.photos/3840/2160?random=109",
//       "http://picsum.photos/3840/2160?random=110"
//     ],
//     description: "A cold desert of majestic mountains and timeless monasteries—perfect for silence seekers."
//   },
//   {
//     title: "Auli",
//     subTitle: "Where Snow Meets Serenity",
//     subTitle2: "Where Snow Meets Serenity",
//     price: 18000,
//     image: "http://picsum.photos/3840/2160?random=3",
//     subImages: [
//       "http://picsum.photos/3840/2160?random=111",
//       "http://picsum.photos/3840/2160?random=112",
//       "http://picsum.photos/3840/2160?random=113",
//       "http://picsum.photos/3840/2160?random=114",
//       "http://picsum.photos/3840/2160?random=115"
//     ],
//     description: "Auli is a snowy paradise where skiers and nature lovers find peace in alpine landscapes."
//   },
//   {
//     title: "Coorg",
//     subTitle: "Whispers of Green and Calm",
//     subTitle2: "Whispers of Green and Calm",
//     price: 16000,
//     image: "http://picsum.photos/3840/2160?random=4",
//     subImages: [
//       "http://picsum.photos/3840/2160?random=116",
//       "http://picsum.photos/3840/2160?random=117",
//       "http://picsum.photos/3840/2160?random=118",
//       "http://picsum.photos/3840/2160?random=119",
//       "http://picsum.photos/3840/2160?random=120"
//     ],
//     description: "Lush coffee plantations, misty mornings, and a tranquil escape await in the heart of Karnataka."
//   },
//   {
//     title: "Andaman",
//     subTitle: "Where Waves Speak in Stillness",
//     subTitle2: "Where Waves Speak in Stillness",
//     price: 25000,
//     image: "http://picsum.photos/3840/2160?random=5",
//     subImages: [
//       "http://picsum.photos/3840/2160?random=121",
//       "http://picsum.photos/3840/2160?random=122",
//       "http://picsum.photos/3840/2160?random=123",
//       "http://picsum.photos/3840/2160?random=124",
//       "http://picsum.photos/3840/2160?random=125"
//     ],
//     description: "Crystal-clear waters and secluded beaches make Andaman the ultimate coastal retreat for peace lovers."
//   }
];

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
     
      <main className="main-grid">
        {json.map((element, index) => (
          <Template
            key={index}
            title={element.title}
            subTitle={element.subTitle}
            price={element.price}
            image={element.image}
          />
        ))}
      </main>

      <footer>
      </footer>
    </>
  );
}
