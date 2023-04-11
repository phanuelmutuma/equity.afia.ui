import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

import HeroIcon from "@/icons/HeroIcon";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  currentTab: string;
}

const SideBar = ({ currentTab }: Props) => {
  enum HeroiconName {
    HomeIcon = "HomeIcon",
    BuildingOfficeIcon = "BuildingOfficeIcon",
    ShieldCheckIcon = "ShieldCheckIcon",
    WrenchScrewdriverIcon = "WrenchScrewdriverIcon",
    CalendarDaysIcon = "CalendarDaysIcon",
    ChatBubbleLeftEllipsisIcon = "ChatBubbleLeftEllipsisIcon",
    ChartBarIcon = "ChartBarIcon",
  }
  const dashTab = [
    {
      name: "Dashboard",
      href: "/",
      icon: HeroiconName.HomeIcon,
      current: true,
    },
  ];
  const clinicTab = [
    {
      name: "All Clinics",
      href: "/clinics",
      icon: HeroiconName.BuildingOfficeIcon,
      current: true,
    },
    {
      name: "Clinic Setup",
      href: "/base",
      icon: HeroiconName.WrenchScrewdriverIcon,
      current: true,
    },
  ];
  const serviceTab = [
    {
      name: "View Services",
      href: "/base",
      icon: HeroiconName.ShieldCheckIcon,
      current: true,
    },
    {
      name: "Services Setup",
      href: "/services-setup",
      icon: HeroiconName.WrenchScrewdriverIcon,
      current: true,
    },
  ];
  const navTabs = [
    {
      name: "Appointments",
      href: "/appointments",
      icon: HeroiconName.CalendarDaysIcon,
      current: true,
    },
    {
      name: "Feedback",
      href: "/feedback",
      icon: HeroiconName.ChatBubbleLeftEllipsisIcon,
      current: false,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: HeroiconName.ChartBarIcon,
      current: false,
    },
  ];
  return (
    <div>
      <aside className="fixed left-0 top-0 z-40 h-screen w-60 translate-x-full bg-equity-yellow-100/50 pt-12 transition-transform sm:translate-x-0">
        <div className="flex items-center justify-center border-b border-equity-brown-100 py-7 text-sm font-bold uppercase tracking-wider text-equity-yellow-400 ">
          ChatBot
        </div>
        <div className=" h-full overflow-y-auto bg-white px-3 pb-4 pt-2">
          <div className="mt-3 space-y-4">
            {dashTab.map((item) => (
              <div
                key={item.name}
                className={`${
                  currentTab === item.name
                    ? " bg-equity-brown-900 text-white"
                    : "hover:bg-equity-brown-900 hover:text-white"
                } flex items-center rounded-lg px-4 py-2 text-equity-brown-900`}
              >
                <HeroIcon name={item.icon} />
                <Link
                  href={item.href}
                  className={classNames(
                    "flex w-full justify-between uppercase tracking-wide leading-wide px-4 py-2 text-left text-sm font-medium "
                  )}
                  aria-current={item.name === "currentTab" ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    currentTab === "All Clinics" ||
                    currentTab === "Clinic Setup"
                      ? " bg-equity-brown-100"
                      : ""
                  } mt-3 flex w-full items-center justify-between rounded-lg px-4 py-2 text-left font-medium text-equity-brown-900 hover:bg-equity-brown-200 focus:outline-none focus-visible:ring`}
                >
                  <div className="flex items-center rounded-lg  text-equity-brown-900">
                    <HeroIcon name="BuildingOffice2Icon" />
                    <span className="px-4 py-2 text-left text-sm font-medium uppercase tracking-wide">
                      Clinics
                    </span>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      open ? "" : "rotate-180"
                    } h-5 w-5 text-equity-brown-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  <div className="space-y-4">
                    {clinicTab.map((item) => (
                      <div
                        key={item.name}
                        className={`${
                          item.name === currentTab
                            ? " bg-equity-brown-900 text-white"
                            : "hover:bg-equity-brown-900 hover:text-white"
                        } flex items-center rounded-lg px-4 py-2 text-equity-brown-900`}
                      >
                        <HeroIcon name={item.icon} />
                        <Link
                          href={item.href}
                          className={classNames(
                            "flex w-full justify-between uppercase tracking-wide leading-wide px-4 py-2 text-left text-xs font-medium "
                          )}
                          aria-current={
                            item.name === "currentTab" ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    currentTab === "View Services" ||
                    currentTab === "Services Setup" ||
                    open
                      ? " bg-equity-brown-100"
                      : ""
                  } mt-3 flex w-full items-center justify-between rounded-lg  px-4 py-2 text-left font-medium text-equity-brown-900 hover:bg-equity-brown-200 focus:outline-none focus-visible:ring`}
                >
                  <div className="flex items-center rounded-lg  text-equity-brown-900">
                    <HeroIcon name="ShieldCheckIcon" />
                    <span className="px-4 py-2 text-left text-sm font-medium uppercase tracking-wide">
                      Services
                    </span>
                  </div>

                  <ChevronUpIcon
                    className={`${
                      currentTab === "View Services" ||
                      currentTab === "Services Setup" ||
                      open
                        ? ""
                        : "rotate-180"
                    } h-5 w-5 text-equity-brown-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  <div className="space-y-4">
                    {serviceTab.map((item) => (
                      <div
                        key={item.name}
                        className={`${
                          item.name === currentTab
                            ? " bg-equity-brown-900 text-white"
                            : "hover:bg-equity-brown-900 hover:text-white"
                        } flex items-center rounded-lg px-4 py-2 text-equity-brown-900`}
                      >
                        <HeroIcon name={item.icon} />
                        <Link
                          href={item.href}
                          className={classNames(
                            "flex w-full justify-between uppercase tracking-wide leading-wide px-4 py-2 text-left text-xs font-medium "
                          )}
                          aria-current={
                            item.name === "currentTab" ? "page" : undefined
                          }
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="mt-3 space-y-4">
            {navTabs.map((item) => (
              <div
                key={item.name}
                className={`${
                  item.name === currentTab
                    ? " bg-equity-brown-900 text-white"
                    : "hover:bg-equity-brown-900 hover:text-white"
                } flex items-center rounded-lg px-4 py-2 text-equity-brown-900`}
              >
                <HeroIcon name={item.icon} />
                <Link
                  href={item.href}
                  className={classNames(
                    "flex w-full justify-between uppercase tracking-wide leading-wide px-4 py-2 text-left text-sm font-medium "
                  )}
                  aria-current={item.name === "currentTab" ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
