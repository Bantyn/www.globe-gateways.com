import Navbar from "./navbar";
import Home from "./home";
import { React,useEffect, useState } from "react";

export default function Main() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      
      <main>
        <Home></Home>
      </main>

      <footer>
        {/* <Footer></Footer> */}
      </footer>
    </>
  );
}
