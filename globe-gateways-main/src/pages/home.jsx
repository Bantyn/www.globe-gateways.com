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
                        <h1 className="logoTitle">Globe Gateways</h1>
                    </div>
                    <div className="cardContainer">
                        {json.map((element, index) => (
                                      <Card
                                        key={index}
                                        title={element.title}
                                        price={element.price}
                                        image={element.image}
                                        location={element.location}
                                        duration={element.duration}
                                        packageType={element.packageType}
                                      />
                    ))}</div>
                </div>
            </section >

    </>
  );
}
