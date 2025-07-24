import { React, useEffect, useState } from "react";
import Card from '../components/card'

export default function Main() {
    const json = [
  {
    "id": 1,
    "title": "Kedarnath",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "packageType":"Gruop Tour",
  },
  {
    "id": 1,
    "title": "Kedarnath",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "packageType":"Gruop Tour",
  },
  {
    "id": 1,
    "title": "Kedarnath",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "packageType":"Gruop Tour",
  },
  {
    "id": 1,
    "title": "Kedarnath",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "packageType":"Gruop Tour",
  },
  {
    "id": 1,
    "title": "Kedarnath",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "packageType":"Gruop Tour",
  },
  {
    "id": 1,
    "title": "Kedarnath",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "packageType":"Gruop Tour",
  }
//   You Can call Api here
]
    return (
      <>
        <section>
          <div className="home">
            <div className="img">
              <h1 className="logoTitle">
                Globe Gateways
                <p>Explore the world, discover yourself.</p>
                  <i className="animated-intro" data-scroll data-scroll-speed="4">
                    Globe Gateways is your premier travel companion, offering
                    unparalleled tour packages that take you on a journey of
                    discovery and adventure. With a curated selection of
                    destinations and experiences, we cater to all types of
                    travelers, from thrill-seekers to culture enthusiasts. Our
                    expert team ensures seamless travel planning, from booking
                    to execution, so you can focus on creating lifelong
                    memories.
                  </i>
              </h1>
              <div className="blur-effect-home"></div>
            </div>
            <div className="cardContainer">
              {json.map((element, index) => (
                <Card
                  key={index}
                  image={element.image}
                  title={element.title}
                  price={element.price}
                  location={element.location}
                  duration={element.duration}
                  packageType={element.packageType}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
}
