import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-blue-600 text-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        ShopKart
      </Link>

      {/* Categories */}
      <nav className="flex gap-6 font-medium">
        <span className="cursor-pointer hover:underline">Men</span>
        <span className="cursor-pointer hover:underline">Women</span>
        <span className="cursor-pointer hover:underline">Electronics</span>
      </nav>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for products, brands & more"
        className="w-1/3 px-4 py-2 rounded text-black"
      />

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Link to="/login" className="font-semibold">
          Login
        </Link>

        <Link to="/cart" className="relative">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
}
