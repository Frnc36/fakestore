import type { productType } from "../types/productType";

interface ProductProps {
  product: productType;
}

function Product({ product }: ProductProps) {
  return (
    <div className="flex-wrap border h-100">
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <img className="h-32" src={product.image} alt={product.title} />
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
    </div>
  );
}

export default Product;
/* <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
  {/* Termékkép és ID jelvény }
  <div className="relative bg-gray-50 p-6 flex items-center justify-center h-60">
    <span className="absolute top-3 left-3 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
      #{product.id}
    </span>
    <img
      src={product.image}
      alt={product.title}
      className="max-h-48 object-contain hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Tartalom }
  <div className="p-5 flex-1 flex flex-col justify-between">
    <div>
      {/* Kategória és Értékelés }
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
          {product.category}
        </span>
        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-semibold text-gray-800">
            {product.rating?.rate}
          </span>
          <span className="text-gray-400 ml-1">
            ({product.rating?.count})
          </span>
        </div>
      </div>

      {/* Termék neve }
      <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
        {product.title}
      </h2>

      {/* Leírás }
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
        {product.description}
      </p>
    </div>

    {/* Ár és Gomb }
    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
      <span className="text-2xl font-extrabold text-gray-900">
        ${product.price}
      </span>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer">
        Kosárba
      </button>
    </div>
  </div>
</div>
 */