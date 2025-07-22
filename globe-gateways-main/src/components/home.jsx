import Navbar from "./navbar";
import { React, useEffect, useState } from "react";

export default function Main() {
    return (
        <>
            <section className="home" id="home">
                <div className="images-container">
                    {/* <div className="image-container" ><img className="img" id="i" src="http://picsum.photos/id/11/3840/2160" /></div>
                    <div className="image-container active" ><img className="img" id="ii" src="http://picsum.photos/id/84/3840/2160" /></div>
                    <div className="image-container" ><img className="img" id="iii" src="http://picsum.photos/id/56/3840/2160" /></div>
                    <div className="image-container" ><img className="img" id="iv" src="http://picsum.photos/id/78/3840/2160" /></div>
                    <div className="image-container" ><img className="img" id="v" src="http://picsum.photos/id/89/3840/2160" /></div> */}
                    <div className="image-container" ></div>
                    <div className="image-container active" ></div>
                    <div className="image-container" ></div>
                    <div className="image-container" ></div>
                    <div className="image-container" ></div>
                </div>
            </section >
        </>
  );
}
