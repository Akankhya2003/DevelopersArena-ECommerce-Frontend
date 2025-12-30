export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition">
      <img
        src="https://via.placeholder.com/300"
        alt={product.name}
        className="h-40 w-full object-contain mb-3"
      />

      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>

      <button
        onClick={() => onAdd(product)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
