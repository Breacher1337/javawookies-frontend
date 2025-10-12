"use client";
import { useState } from "react";

export default function CategorySidebar({ onFilter }) {
  const [active, setActive] = useState("All");
  const categories = ["All", "Best Seller", "Cookies", "Drinks", "Cakes", "Pastries"];

  return (
    <nav className="flex flex-col gap-3 w-44">
      <h2 className="text-lg font-bold text-amber-900 mb-2 text-center">Filter</h2>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat);
            onFilter(cat);
          }}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200
            ${
              active === cat
                ? "bg-amber-900 text-white shadow-md"
                : "border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
