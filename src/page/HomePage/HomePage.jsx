import React from "react";
import HomeCarousel from "./HomeCarousel";
import ListMovie from "./ListMovie";
import TabMovie from "./TabMovie";
import Footer from "../../component/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <ListMovie />
      <TabMovie />
      <Footer />
    </div>
  );
}
