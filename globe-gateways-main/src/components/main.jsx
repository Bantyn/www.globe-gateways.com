import Navbar from "./navbar";
import { React,useEffect, useState } from "react";

export default function Main() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section id="mainPage"></section>
        <section id="detailsPage"></section>
      </main>
      <footer>
        {/* <Footer></Footer> */}
      </footer>
    </>
  );
}
