import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./components/Data";

export default function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        //another method is to use the spread operator {...card}
        //and then remove the .card notation in the Card component

        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // location={card.location}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Main />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
