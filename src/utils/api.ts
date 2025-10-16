export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api"; // use your backend URL

export async function createOrder(orderData: any) {
  const res = await fetch(`${API_BASE}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
}
