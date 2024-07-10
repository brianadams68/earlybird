import React, { ReactNode } from 'react';

export interface Product {
    quantity: ReactNode;
    id: number;
    name: string;
    category: "male" | "female" | "sale";
    onSale: boolean;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    color: string;
  }
  