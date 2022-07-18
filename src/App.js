import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Main />
      <Card
        img="image_12.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
