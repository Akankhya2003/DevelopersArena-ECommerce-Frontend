import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Proof Tailwind is working */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Tailwind Working 🚀
      </h1>

      <h2 className="text-2xl font-semibold mb-6">
        Trending Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
