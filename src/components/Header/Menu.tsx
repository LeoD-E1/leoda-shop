import React from "react";
import { HiX as XIcon } from "react-icons/hi";

const Menu = (prosp: any) => {
  const { setOpen, navigation } = prosp;
  return (
    <>
      <div className="relative z-40 lg:hidden">
        <div className="fixed h-full max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
          <div className="px-4 pt-4 pb-2 flex">
            <button
              type="button"
              className="m-1 p-1 rounded-full inline-flex items-center justify-center text-gray-600 hover:bg-gray-200 focus:bg-gray-300"
              onClick={() => setOpen(false)}
            >
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 space-y-6">
            {navigation.map((page: any) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.links}
                  className="-m-2 p-2 block font-medium text-gray-900 hover:bg-gray-300 focus:bg-gray-400"
                >
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 py-6 px-4 space-y-6">
            <div className="flow-root">
              <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                Sign in
              </a>
            </div>

            <div className="flow-root">
              <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                Create account
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4">
            <a href="#" className="-m-2 p-2 flex items-center">
              <img
                src="https://tailwindui.com/img/flags/flag-canada.svg"
                alt=""
                className="w-5 h-auto block flex-shrink-0"
              />
              <span className="ml-3 block text-base font-medium text-gray-900">
                CAD
              </span>
              <span className="sr-only">, change currency</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
