"use client";

import { MenuItem } from "@/types/menu-item";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function isActivePath(candidate: string, pathname: string) {
  if (candidate === "/") return candidate === pathname;
  return pathname.startsWith(candidate);
}

export default function Navbar({ menuItems }: { menuItems: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <nav>
      <Disclosure
        as="nav"
        className="transparent backdrop-blur-bg fixed w-full top-0 shadow shadow-gray-100 dark:shadow-gray-800"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl">
              <div className="relative flex h-20 items-center justify-between">
                <div className="sm:hidden absolute inset-y-0 right-0 flex items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-cyan-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center px-3">
                    <a className="text-cyan-400" href="/">Schmidt Robert</a>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <div>image</div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-2">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            isActivePath(item.href, pathname)
                              ? "dark:text-gray-200 text-black font-semibold"
                              : "text-cyan-500 dark:hover:text-white hover:text-black",
                            "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                          )}
                          aria-current={
                            isActivePath(item.href, pathname)
                              ? "page"
                              : undefined
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {menuItems.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-cyan-400 hover:text-gray-900 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
}
