import Navbar from "./navbar";
import Pagination from "./pagination";
import { React, useEffect, useState } from "react";

export default function Main() {
    return (
        <>
            <section className="home" id="home">
                <div className="images-container">
                    <div className="image-container"><img data-scroll data-scroll-speed="2" className="img active" id="i" src="http://picsum.photos/id/11/3840/2160" /></div>
                    <div className="image-container"><img data-scroll data-scroll-speed="1" className="img" id="ii" src="http://picsum.photos/id/84/3840/2160" /></div>
                    <div className="image-container"><img data-scroll data-scroll-speed="4" className="img" id="iii" src="http://picsum.photos/id/56/3840/2160" /></div>
                    <div className="image-container"><img data-scroll data-scroll-speed="3" className="img" id="iv" src="http://picsum.photos/id/78/3840/2160" /></div>
                    <div className="image-container"><img data-scroll data-scroll-speed="2" className="img" id="v" src="http://picsum.photos/id/89/3840/2160" /></div>
                </div>
                <Pagination numbers={document.querySelector('.img.active')?.id} Lastnumbers={document.querySelectorAll('.img').length ? document.querySelector('.img')[document.querySelectorAll('.img').length-1]?.id : undefined}></Pagination>
            </section >

    </>
  );
}
