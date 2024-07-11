import React, { useState } from "react";
import SubNavbar from "../Components/SubNavbar";
import { Product } from "../types/Product";
import { products } from "../Data/productsData";
import ShoppingCart from "../Components/ShoppingCart";

const ProductPage = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log("Add to cart clicked", product); // Debugging statement
    const index = selectedProducts.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      const updatedProducts = [...selectedProducts];
      const existingProduct = updatedProducts[index];

      if (existingProduct && typeof existingProduct.quantity === "number") {
        updatedProducts[index] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        setSelectedProducts(updatedProducts);
      }
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
    console.log("Selected products after adding", selectedProducts); // Debugging statement
  };

  const removeProductFromCart = (productId: number) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.id !== productId
    );
    setSelectedProducts(updatedProducts);
  };

  return (
    <div>
      <SubNavbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="ml-4 bg-indigo-600 hover:bg-indigo-900 active:bg-indigo-800 text-white px-2 py-1 rounded-md text-sm transform active:translate-y-0.5 active:shadow-inner transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProducts.length > 0 && (
        <ShoppingCart
          selectedProducts={selectedProducts}
          removeProduct={removeProductFromCart}
        />
      )}
    </div>
  );
};

export default ProductPage;
