import React from "react";

interface CardElement {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

const Card = (obj: CardElement) => {
  return (
    <div className="group relative">
      <div className="border-2 border-transparent group-hover:opacity-90 group-hover:shadow-lg group-hover:border-solid group-hover:border-sky-700 rounded-md">
        <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
          <img
            src={obj.imageSrc}
            alt={obj.imageAlt}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <p className="my-2 text-xl font-extrabold text-gray-900">{obj.price}</p>
        <div className="my-2 flex justify-center">
          <div>
            <h3 className="text-md text-gray-700">
              <a href={obj.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {obj.name}
              </a>
            </h3>
            <p className="my-2 text-sm text-gray-500">{obj.color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
