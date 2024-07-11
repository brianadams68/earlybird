import React from "react";
import { Product } from "../types/Product";

type ShoppingBagProps = {
  selectedProducts: Product[];
  removeProduct: (productId: number) => void;
};

const ShoppingBag: React.FC<ShoppingBagProps> = ({
  selectedProducts,
  removeProduct,
}) => {
  const calculateSubtotal = () => {
    let subtotal = 0;
    selectedProducts.forEach((product) => {
      const price = parseFloat(product.price.replace("$", "").replace(",", ""));
      subtotal += price * (product.quantity || 1);
    });
    return subtotal.toFixed(2);
  };

    function setOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id} className="flex justify-between mb-2">
            <div className="flex items-center">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-12 h-12 object-cover mr-4"
              />
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.color}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {product.quantity}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">{product.price}</p>
              <button
                onClick={() => removeProduct(product.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-lg font-bold">Subtotal: ${calculateSubtotal()}</p>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </a>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default ShoppingBag;
