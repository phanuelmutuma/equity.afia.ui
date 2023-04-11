import Link from "next/link";
import React, { useState } from "react";

import HeroIcon from "@/icons/HeroIcon";

interface Props {
  currentTab: string;
}

const SideBar = ({ currentTab }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  enum HeroiconName {
    HomeIcon = "HomeIcon",
    BuildingOfficeIcon = "BuildingOfficeIcon",
    ShieldCheckIcon = "ShieldCheckIcon",
    WrenchScrewdriverIcon = "WrenchScrewdriverIcon",
    CalendarDaysIcon = "CalendarDaysIcon",
    ChatBubbleLeftEllipsisIcon = "ChatBubbleLeftEllipsisIcon",
    ChartBarIcon = "ChartBarIcon",
  }
  // const dashTab = [
  //   {
  //     name: "Dashboard",
  //     href: "/",
  //     icon: HeroiconName.HomeIcon,
  //     current: true,
  //   },
  // ];
  // const clinicTab = [
  //   {
  //     name: "All Clinics",
  //     href: "/clinics",
  //     icon: HeroiconName.BuildingOfficeIcon,
  //     current: true,
  //   },
  // {
  //   name: "Clinic Setup",
  //   href: "/base",
  //   icon: HeroiconName.WrenchScrewdriverIcon,
  //   current: true,
  // },
  // ];
  // const serviceTab = [
  //   {
  //     name: "View Services",
  //     href: "/base",
  //     icon: HeroiconName.ShieldCheckIcon,
  //     current: true,
  //   },
  //   {
  //     name: "Services Setup",
  //     href: "/services-setup",
  //     icon: HeroiconName.WrenchScrewdriverIcon,
  //     current: true,
  //   },
  // ];
  const navTabs = [
    {
      name: "Dashboard",
      href: "/",
      icon: HeroiconName.HomeIcon,
      current: true,
    },
    {
      name: "All Clinics",
      href: "/clinics",
      icon: HeroiconName.BuildingOfficeIcon,
      current: true,
    },
    {
      name: "Clinic Services",
      href: "/clinic-services",
      icon: HeroiconName.ShieldCheckIcon,
      current: true,
    },
    {
      name: "Service Setup",
      href: "/service-setup",
      icon: HeroiconName.WrenchScrewdriverIcon,
      current: true,
    },
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
      <aside
        className={`${
          sidebarOpen ? "w-60 bg-equity-yellow-100" : "w-20 bg-white"
        } sticky left-0 top-0 z-40 translate-x-full pt-12 transition-transform sm:translate-x-0`}
      >
        <div className="flex items-center justify-center border-b border-white py-8 text-sm font-bold uppercase tracking-wider text-equity-brown-900 ">
          <button className="px-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <span className={`${sidebarOpen ? "flex" : "hidden"} `}>
            Valentia Bot
          </span>
        </div>
        <div
          className="overflow-y-auto bg-white px-3 pb-4 pt-2"
          style={{ minHeight: "calc(100vh - 8.7rem)" }}
        >
          {/* <div className="mt-3 space-y-4">
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
          </Disclosure> */}
          <div className="mt-3 space-y-4">
            {navTabs.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={`${
                  item.name === currentTab
                    ? " bg-equity-brown-900 text-white"
                    : "hover:bg-equity-brown-900 hover:text-white"
                } flex items-center rounded-lg px-4 py-2 text-equity-brown-900`}
              >
                <HeroIcon name={item.icon} />
                <div
                  className={`${
                    sidebarOpen ? "flex" : "hidden"
                  }  w-full justify-between px-4 py-2 text-left text-sm font-medium uppercase tracking-wide`}
                  aria-current={item.name === "currentTab" ? "page" : undefined}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
