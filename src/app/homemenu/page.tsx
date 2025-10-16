"use client";
import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import CheckoutIcon from "@/icons/Checkout";

export default function HomeMenu() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState<any[]>([]);

  // Load existing cart from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Sync cart to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: any) => {
    const existing = cart.find((i) => i.name === item.name);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((i) =>
        i.name === item.name ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      updatedCart = [...cart, { ...item, qty: 1 }];
    }
    setCart(updatedCart);
  };

  const products = [
    { name: "Java Muffin", price: 100, category: "Pastries", component: <JavaMuffin /> },
    { name: "Mango Cake", price: 160, category: "Cakes", component: <Mango /> },
    { name: "Tiramisu Cake", price: 180, category: "Cakes", bestSeller: true, component: <Tiramisu /> },
    { name: "Brownies Overload", price: 80, category: "Pastries", component: <Brownies /> },
    { name: "Cinammon Roll", price: 100, category: "Pastries", component: <Cinammon /> },
    { name: "Glazed Donut", price: 120, category: "Pastries", component: <Donut /> },
    { name: "Biscoff Milkshake", price: 180, category: "Drinks", bestSeller: true, component: <Biscoff /> },
    { name: "Caramel Drip", price: 160, category: "Drinks", component: <Caramel /> },
    { name: "Strawberry Milkshake", price: 190, category: "Drinks", component: <Strawberry /> },
    { name: "Croissant au beurre", price: 120, category: "Pastries", component: <Croissant /> },
    { name: "Chocomoist Shake", price: 190, category: "Drinks", component: <Chocomoist /> },
    { name: "Dream Matcha", price: 170, category: "Drinks", bestSeller: true, component: <Matcha /> },
    { name: "Javawookies", price: 150, category: "Cookies", bestSeller: true, component: <Javawookies /> },
    { name: "Matchawookies", price: 150, category: "Cookies", component: <Matchawookies /> },
    { name: "Korean Cream Cheese Bun", price: 130, category: "Pastries", component: <Korean /> },
    { name: "Chocolate Cake", price: 180, category: "Cakes", component: <Choco /> },
  ];

  // Filter logic
  const filtered =
    filter === "All"
      ? products
      : filter === "Best Seller"
      ? products.filter((p) => p.bestSeller)
      : products.filter((p) => p.category === filter);

  return (
    <section className="relative mt-20 mb-20">
      {/* Sidebar Filter */}
      <div className="hidden md:block fixed left-10 top-28 z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-amber-900/30">
        <CategorySidebar onFilter={setFilter} />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto px-10">
        {filtered.map((p, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg text-center hover:bg-white transition-shadow
            hover:shadow-2xl hover:shadow-black text-gray-700">
            {p.component}
            <button
              className="mt-4 px-4 w-full bg-amber-900 text-white py-2 rounded-full hover:bg-amber-800"
              onClick={() => addToCart({ name: p.name, price: p.price })}
            >
              Add to Cart ₱{p.price}
            </button>
          </div>
        ))}
      </div>


              <div className="fixed bottom-0 left-0 w-full">
              <footer className=" gap-3 text-xl mt-8 items-center justify-center mb-4 flex">
                  <Link className="text-white  bg-red-700 rounded-full py-2
                   px-6  flex gap-5 items-center text-center whitespace-nowrap
                   hover:bg-primary transition-shadow hover:shadow-md hover:shadow-black" href="/hero" >
                  Cancel 
                  </Link>
              
                  <Link className="text-black  bg-white rounded-full py-2
                   px-6  flex gap-3 items-center text-center whitespace-nowrap border border-gray-950
                   hover:bg-primary transition-shadow hover:shadow-md hover:shadow-black" href="/checkout" >
                  Check Out ({cart.length}) <CheckoutIcon /> 
                  </Link>
              </footer>
              </div>

    </section>
  );
}
