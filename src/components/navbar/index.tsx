import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import img from "public/assets/images/white-logo.png";
import React, { Fragment } from "react";

import { AppConfig } from "@/utils/AppConfig";
import { greetByTime } from "@/utils/DateUtil";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className={`px-14 `}>
      <>
        <div className="mx-auto py-1 sm:px-6">
          <div className="relative flex h-14 items-center justify-between lg:h-10">
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
              <div className="flex shrink-0 items-center">
                <Image src={img} alt="Equity Afia" width={90} height={40} />
              </div>
              <div className="ml-16 hidden items-center border-l border-equity-brown-200 pl-5 font-bold text-white lg:flex ">
                {greetByTime()}, Welcome to {AppConfig.site_name}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton
                  appearance={{
                    variables: {
                      fontFamily: "Inter",
                    },
                    userProfile: { variables: { fontFamily: "Inter" } },
                  }}
                />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton mode="redirect">
                  <button className="rounded bg-equity-brown-100 px-7 py-1.5 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-slate-50">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3 hidden">
                <div>
                  <Menu.Button className="flex rounded-full text-sm ">
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-9 w-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    {/* <img className="h-9 w-9 rounded-full" src="" alt="" /> */}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2"></div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};

export default NavBar;
