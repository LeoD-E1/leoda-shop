import React from "react";
import { HiX as XIcon } from "react-icons/hi";

const Menu = (prosp: any) => {
  const { setOpen } = prosp;
  return (
    <>
      <div className="relative z-40 lg:hidden">
        <div className="fixed h-full max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
          <div className="px-4 pt-5 pb-2 flex">
            <button
              type="button"
              className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
              onClick={() => setOpen(false)}
            >
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <p>Hello</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
