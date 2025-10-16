"use client";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // 🔧 Use environment variable (set this in Netlify)
  const API_BASE_URL = process.env.API_BASE_URL || || "http://localhost:8080/api";

  useEffect(() => {
    const stored = sessionStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const updateQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const updated = [...prev];
      updated[index].qty = Math.max(1, updated[index].qty + delta);
      sessionStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (index: number) => {
    setCart((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      sessionStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const confirmCheckout = async () => {
    if (cart.length === 0) return;
    setIsSubmitting(true);
    setMessage("Processing order...");

    try {
      const res = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart, totalPrice }),
      });

      if (!res.ok) throw new Error("Failed to send order");

      setMessage("✅ Order sent successfully!");
      sessionStorage.removeItem("cart");
      setCart([]);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error submitting order");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Checkout Summary</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
          <ul className="divide-y divide-gray-300 mb-6">
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between py-3 items-center">
                <span className="font-semibold">{item.name}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(i, -1)}
                    className="bg-gray-200 px-2 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateQuantity(i, 1)}
                    className="bg-gray-200 px-2 rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <span>₱{item.price * item.qty}</span>
                <button
                  onClick={() => removeItem(i)}
                  className="text-red-600 font-bold ml-4 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right text-xl font-bold mb-6">
            Total: ₱{totalPrice}
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500"
              disabled={isSubmitting}
            >
              Back
            </button>
            <button
              onClick={confirmCheckout}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Confirm Checkout"}
            </button>
          </div>

          {message && (
            <p className="text-center mt-6 text-lg font-semibold">{message}</p>
          )}
        </div>
      )}
    </section>
  );
}
