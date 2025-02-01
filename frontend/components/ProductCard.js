import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <a className="text-accent">View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;

