/**import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Product } from "../types/Product";

type ShoppingCartProps = {
  selectedProducts: Product[];
  removeProduct: (productId: number) => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  selectedProducts,
  removeProduct,
}) => {
  const [open, setOpen] = React.useState(false);
  console.log("Selected products in ShoppingCart:", selectedProducts); // Debugging statement

  const calculateSubtotal = () => {
    let subtotal = 0;
    selectedProducts.forEach((product) => {
      const price = parseFloat(product.price.replace("$", "").replace(",", ""));
      subtotal += price * (product.quantity || 1);
    });
    return subtotal.toFixed(2);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative rounded-full p-1 text-gray-400 hover:text-white"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View shopping cart</span>
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul>
                          {selectedProducts.map((product) => (
                            <li
                              key={product.id}
                              className="flex justify-between mb-2"
                            >
                              <div className="flex items-center">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="w-12 h-12 object-cover mr-4"
                                />
                                <div>
                                  <h3 className="text-sm font-medium">
                                    {product.name}
                                  </h3>
                                  <p className="text-sm text-gray-600">
                                    {product.color}
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    Quantity: {product.quantity}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {product.price}
                                </p>
                                <button
                                  onClick={() => removeProduct(product.id)}
                                  className="text-red-500 hover:text-red-700 text-sm"
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>€{calculateSubtotal()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
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
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ShoppingCart;*/

import React from "react";
import { Product } from "../types/Product";

type ShoppingCartProps = {
  selectedProducts: Product[];
  removeProduct: (productId: number) => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  selectedProducts,
  removeProduct,
}) => {
  console.log("Selected products in ShoppingCart:", selectedProducts); // Debugging statement

  const calculateSubtotal = () => {
    let subtotal = 0;
    selectedProducts.forEach((product) => {
      const price = parseFloat(product.price.replace("$", "").replace(",", ""));
      subtotal += price * (product.quantity || 1);
    });
    return subtotal.toFixed(2);
  };

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
    </div>
  );
};

export default ShoppingCart;
