"use client";
import { useState } from "react";
import JavaMuffin from "../products/JavaMuffin";
import Mango from "../products/Mango";
import Tiramisu from "../products/Tiramisu";
import Brownies from "../products/Brownies";
import Cinammon from "../products/Cinammon";
import Donut from "../products/Donut";
import Biscoff from "../products/Biscoff";
import Caramel from "../products/Caramel";
import Strawberry from "../products/Strawberry";
import Croissant from "../products/Croissant";
import Chocomoist from "../products/Chocomoist";
import Matcha from "../products/Matcha";
import Javawookies from "../products/Javawookies";
import Matchawookies from "../products/Matchawookies";
import Korean from "../products/Korean";
import Choco from "../products/Chococake";
import Footer from "../layout/Footer";
import CategorySidebar from "../layout/Sidebar";

export default function HomeMenu() {
  const [filter, setFilter] = useState("All");

  const products = [
    { component: <JavaMuffin />, category: "Pastries"},
    { component: <Mango />, category: "Cakes" },
    { component: <Tiramisu />, category: "Cakes", bestSeller: true },
    { component: <Brownies />, category: "Pastries"},
    { component: <Cinammon />, category: "Pastries" },
    { component: <Donut />, category: "Pastries" },
    { component: <Biscoff />, category: "Drinks", bestSeller: true },
    { component: <Caramel />, category: "Drinks" },
    { component: <Strawberry />, category: "Drinks" },
    { component: <Croissant />, category: "Pastries" },
    { component: <Chocomoist />, category: "Drinks" },
    { component: <Matcha />, category: "Drinks", bestSeller: true },
    { component: <Javawookies />, category: "Cookies", bestSeller: true },
    { component: <Matchawookies />, category: "Cookies" },
    { component: <Korean />, category: "Pastries" },
    { component: <Choco />, category: "Cakes" },
  ];

  // ✅ Filtering logic (added Best Seller)
  const filtered =
    filter === "All"
      ? products
      : filter === "Best Seller"
      ? products.filter((p) => p.bestSeller)
      : products.filter((p) => p.category === filter);

  return (
    <section className="relative mt-20 mb-20">
      {/* Floating sidebar */}
      <div className="hidden md:block fixed left-10 top-28 z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-amber-900/30">
        <CategorySidebar onFilter={setFilter} />
      </div>

      {/* Main product grid (kept same layout) */}
      <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto px-10">
        {filtered.map((p, i) => (
          <div key={i}>{p.component}</div>
        ))}
      </div>

      <Footer />
    </section>
  );
}
