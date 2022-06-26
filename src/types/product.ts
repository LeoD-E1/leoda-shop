interface Image {
  title: string;
  src: string;
  alt: string;
}

export interface Product {
  name: string;
  href: string;
  portrait: {
    src: string;
    alt: string;
  };
  images: Image[];
  price: {
    currency: "ARS" | "USD";
    value: number;
  };
  color: string[];
  category: string[];
  description: string;
  sizes: string[];
  brand: string;
  clothingType: string;
  quantity: number;
}
