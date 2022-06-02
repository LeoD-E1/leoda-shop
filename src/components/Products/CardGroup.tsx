import React from "react";
import Card from "./Card";

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

interface Props {
  title: string;
  arrObj: any[];
}

const CardGroup = (props: Props) => {
  const { title, arrObj } = props;
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {arrObj.map((obj: Product) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
