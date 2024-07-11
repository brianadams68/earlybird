import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Basic Tee",
    category: "sale",
    onSale: false,
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$15",
    color: "Black",
    quantity: 10,
  },
  {
    id: 2,
    name: "Basic Tee",
    category: "male",
    onSale: false,
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$45",
    color: "White",
    quantity: 10,
  },
  {
    id: 3,
    name: "Basic Tee",
    category: "female",
    onSale: false,
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$25",
    color: "Navy Blue",
    quantity: 10,
  },
  {
    id: 4,
    name: "Basic Tee",
    category: "male",
    onSale: true,
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$55",
    color: "Green",
    quantity: 10,
  },
  {
    id: 5,
    name: "Basic Tee",
    category: "male",
    onSale: true,
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$55",
    color: "Grey",
    quantity: 10,
  },
];

