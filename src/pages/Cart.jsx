import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = cart.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">
                    {index + 1}. {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Price: Rs{item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-2 font-semibold">
                    Total: Rs{(item.price * item.qty).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-10 bg-gray-100 p-6 rounded">
            <h2 className="text-xl font-bold mb-4">📊 Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Rs{shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>Rs{tax.toFixed(2)}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-xl font-bold">
              <span>💵 TOTAL</span>
              <span>Rs{total.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded text-lg">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
