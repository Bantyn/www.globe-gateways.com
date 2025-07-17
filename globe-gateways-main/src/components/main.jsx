import Template from "./template";
import { React, useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Main() {
  const json = [
  {
    "id": 1,
    "title": "Kedarnath",
    "subTitle": "Sacred peaks and divine tranquility",
    "location": "Uttarakhand",
    "price": 11500,
    "duration": "4D/3N",
    "image": "../src/assets/images/kedarnath/kedarnath.png",
    "subImages": ["../src/assets/images/kedarnath/subImages/kedarnath1.jpg",
                  "../src/assets/images/kedarnath/subImages/kedarnath2.jpg",
                  "../src/assets/images/kedarnath/subImages/kedarnath3.jpg",
                  "../src/assets/images/kedarnath/subImages/kedarnath4.jpg",
                  "../src/assets/images/kedarnath/subImages/kedarnath5.jpg"
    ],
    "transportation": ["Bus", "Helicopter", "Shared Cab"],
    "includes": ["Accommodation", "Meals", "Local Guide", "Helicopter Ticket (optional)"],
    "description": "A sacred Himalayan pilgrimage site nestled amidst snow‑capped peaks and spiritual calm."
  },
  {
    "id": 2,
    "title": "Badrinath",
    "subTitle": "Temple serenity in Himalayan bliss",
    "location": "Uttarakhand",
    "price": 9500,
    "duration": "3D/2N",
    "image": "../src/assets/images/badhrinath/badhrinath.png",
    "subImages": ["../src/assets/images/badhrinath/subImages/badrinath1.jpg",
                  "../src/assets/images/badhrinath/subImages/badrinath2.jpg",
                  "../src/assets/images/badhrinath/subImages/badrinath3.jpg",
                  "../src/assets/images/badhrinath/subImages/badrinath4.jpeg",
                  "../src/assets/images/badhrinath/subImages/badrinath5.jpeg"
    ],
    "transportation": ["Bus", "Cab"],
    "includes": ["Hotel Stay", "Meals", "Temple Visit", "Travel Insurance"],
    "description": "A revered Hindu pilgrimage site known for its sacred temple and scenic Himalayan beauty."
  },
  {
    "id": 3,
    "title": "Manali",
    "subTitle": "Snowy adventures and pine forests",
    "location": "Himachal Pradesh",
    "price": 13500,
    "duration": "6D/5N",
    "image": "../src/assets/images/manali/manali.png",
    "subImages": [],
    "transportation": ["Bus", "Train", "Flight (optional)"],
    "includes": ["Stay", "Breakfast", "City Tour", "Adventure Activities"],
    "description": "Popular hill station with snowy landscapes, apple orchards, and adventure sports."
  },
  {
    "id": 4,
    "title": "Vietnam",
    "subTitle": "Cultural richness and river charm",
    "location": "Southeast Asia",
    "price": 97500,
    "duration": "7D/6N",
    "image": "../src/assets/images/vietnam/vietnam.png",
    "subImages": ["../src/assets/images/vietnam/subImages/vietnam1.jpg",
                  "../src/assets/images/vietnam/subImages/vietnam2.jpg",
                  "../src/assets/images/vietnam/subImages/vietnam3.jpg",
                  "../src/assets/images/vietnam/subImages/vietnam4.jpg",
                  "../src/assets/images/vietnam/subImages/vietnam5.jpg"
    ],
    "transportation": ["Flight", "Cruise", "Bus"],
    "includes": ["Flight", "Accommodation", "Meals", "Cruise Tour", "Visa Assistance"],
    "description": "Discover Vietnam’s natural beauty, historic cities, and vibrant street markets."
  }, 
  {
    "id": 5,
    "title": "Hong Kong",
    "subTitle": "Skyscrapers meet harbor lights",
    "location": "East Asia",
    "price": 124500,
    "duration": "7D/6N",
    "image": "../src/assets/images/hongkong/hongkong.png",
    "subImages": ["../src/assets/images/hongkong/subImages/hongkong1.jpg",
                  "../src/assets/images/hongkong/subImages/hongkong2.jpg",
                  "../src/assets/images/hongkong/subImages/hongkong3.jpg",
                  "../src/assets/images/hongkong/subImages/hongkong4.jpg",
                  "../src/assets/images/hongkong/subImages/hongkong5.jpg"
    ],
    "transportation": ["Flight", "Metro", "Bus"],
    "includes": ["Flight", "Hotel", "Island Hopping", "Theme Park Tickets"],
    "description": "Explore the vibrant city of Hong Kong — a blend of tradition, innovation, and neon."
  },
  {
    "id": 6,
    "title": "Chardham",
    "subTitle": "Spiritual circuit of sacred journeys",
    "location": "Uttarakhand",
    "price": 17500,
    "duration": "10D/9N",
    "image": "../src/assets/images/chardham/chardham.png",
    "subImages": ["../src/assets/images/chardham/subImages/chardham1.jpg",
                  "../src/assets/images/chardham/subImages/chardham2.jpg",
                  "../src/assets/images/chardham/subImages/chardham3.jpg",
                  "../src/assets/images/chardham/subImages/chardham4.jpg",
                  "../src/assets/images/chardham/subImages/chardham5.jpg"
    ],
    "transportation": ["Bus", "Tempo Traveller"],
    "includes": ["All Temple Visits", "Accommodation", "Meals", "Local Transport"],
    "description": "The ultimate pilgrimage journey across four revered sites in the Indian Himalayas."
  }, 
  {
    "id": 7,
    "title": "Tirupati",
    "subTitle": "Devotion flows through sacred hills",
    "location": "Andhra Pradesh",
    "price": 19500,
    "duration": "6D/5N",
    "image": "../src/assets/images/Tirupati/tirupati.png",
    "subImages": ["../src/assets/images/Tirupati/subImages/tirupati1.jpg",
                  "../src/assets/images/Tirupati/subImages/tirupati2.jpg",
                  "../src/assets/images/Tirupati/subImages/tirupati3.jpg",
                  "../src/assets/images/Tirupati/subImages/tirupati4.jpg",
                  "../src/assets/images/Tirupati/subImages/tirupati5.jpg"
    ],
    "transportation": ["Train", "Bus"],
    "includes": ["Temple Darshan", "Accommodation", "Meals", "Local Guide"],
    "description": "One of the richest temples in the world, drawing devotees to its sacred foothills."
  },
  {
    "id": 8,
    "title": "Goa",
    "subTitle": "Beaches, parties, and tropical breeze",
    "location": "Goa",
    "price": 8300,
    "duration": "4D/3N",
    "image": "../src/assets/images/Goa/goa.png",
    "subImages": ["../src/assets/images/Goa/subImages/goa1.jpg",
                  "../src/assets/images/Goa/subImages/goa2.jpg",
                  "../src/assets/images/Goa/subImages/goa3.jpg",
                  "../src/assets/images/Goa/subImages/goa4.jpg",
                  "../src/assets/images/Goa/subImages/goa5.jpg"
    ],
    "transportation": ["Flight", "Train", "Bike Rentals"],
    "includes": ["Beach Stay", "Breakfast", "Sightseeing", "Nightlife Access"],
    "description": "Golden beaches, Portuguese charm, and endless entertainment make Goa irresistible."
  },
  {
    "id": 9,
    "title": "Singapore",
    "subTitle": "Futuristic gardens and urban wonder",
    "location": "Southeast Asia",
    "price": 129900,
    "duration": "9D/8N", 
    "image": "../src/assets/images/Singpore/singapore.png",
    "subImages": ["../src/assets/images/Singpore/subImages/singpore1.jpg",
                  "../src/assets/images/Singpore/subImages/singpore2.jpg",
                  "../src/assets/images/Singpore/subImages/singpore3.jpg",
                  "../src/assets/images/Singpore/subImages/singpore4.jpg",
                  "../src/assets/images/Singpore/subImages/singpore5.jpg"
    ],
    "transportation": ["Flight", "Metro", "Bus"],
    "includes": ["Flight", "Hotel", "Universal Studios", "Gardens by the Bay"],
    "description": "A clean, efficient city full of world-class attractions and nature-tech fusion."
  },
  {
    "id": 10,
    "title": "Dubai",
    "subTitle": "Luxury skyline in desert grandeur",
    "location": "UAE",
    "price": 65500,
    "duration": "6D/5N",
    "image": "../src/assets/images/dubai/dubai.png",
    "subImages": ["../src/assets/images/dubai/subImages/dubai1.jpg",
                  "../src/assets/images/dubai/subImages/dubai2.jpg",
                  "../src/assets/images/dubai/subImages/dubai3.jpg",
                  "../src/assets/images/dubai/subImages/dubai4.jpg",
                  "../src/assets/images/dubai/subImages/dubai5.jpg"
    ],
    "transportation": ["Flight", "Metro", "Desert Safari Jeep"],
    "includes": ["Flight", "Hotel", "Desert Safari", "Burj Khalifa Entry", "Meals"],
    "description": "Experience luxury in the heart of the desert with skyscrapers, souks, and safaris."
  }
  ];

  const containerRef = useRef();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.1,
      smartphone:{
        smooth:true
      },
      tablet:{
        smooth:true
      }
    });
    setTimeout(() => {
      scroll.update();
    }, 500);
    return () => scroll.destroy();
  }, []);
  return (
    <>
      <main ref={containerRef} data-scroll-container>
        {json.map((element, index) => (
          <Template
            key={index}
            title={element.title}
            subTitle={element.subTitle}
            price={element.price}
            image={element.image}
            subImages={element.subImages}
            location={element.location}
            duration={element.duration}
            transportation={element.transportation}
            includes={element.includes}
            description={element.description}
          />
        ))}
      </main>

      
    </>
  );
}
