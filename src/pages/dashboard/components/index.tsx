import Link from "next/link";
import React from "react";

import HeroIcon from "@/icons/HeroIcon";

const Dashboard = () => {
  return (
    <div>
      <div className="grid h-full w-full rounded">
        <div>
          <div className="flex items-center gap-2 px-5 md:gap-4">
            <div className="w-full">
              <h3 className="-mb-px inline-flex items-center space-x-2 border-b-2 border-equity-brown-300 py-4 text-equity-brown-500">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-full bg-transparent p-2 text-6xl font-medium text-gray-500 outline-none transition hover:bg-equity-brown-100 hover:text-equity-brown-600 focus:outline-none"
                  title="Back"
                >
                  <HeroIcon
                    className="h-6 w-6 stroke-current"
                    name="ArrowLeftIcon"
                  />
                </button>
                <div className="flex items-start space-x-1 text-equity-brown-500/60">
                  <HeroIcon
                    className="h-6 w-6 stroke-current"
                    name="CircleStackIcon"
                  />
                  <span className="truncate text-xs font-medium uppercase leading-none tracking-wider text-equity-brown-500 antialiased md:text-base ">
                    Section Title
                  </span>
                </div>
              </h3>
            </div>
            <div className="flex w-full items-center justify-end space-x-1">
              {/* <slot name="filter"></slot> */}
              <div className="group flex w-full items-center rounded border border-gray-300 text-gray-500 transition duration-300 focus-within:border-equity-brown-500 focus-within:text-gray-900 focus-within:shadow-md md:w-1/2">
                <input
                  type="search"
                  placeholder="Search..."
                  className="peer w-full rounded-l border-none px-3 py-1.5 text-sm outline-none transition placeholder:italic placeholder:text-gray-400 focus:ring-0"
                />
                <button className="p-3 transition focus:outline-none peer-focus:border peer-focus:border-equity-brown-500 peer-focus:bg-equity-brown-500 peer-focus:text-white peer-focus:shadow-md">
                  <HeroIcon
                    className="h-4 stroke-current"
                    name="MagnifyingGlassIcon"
                  />
                </button>
              </div>
              <Link
                className="hidden items-center space-x-1 rounded bg-equity-brown-100 p-2 text-sm text-equity-brown-500 hover:bg-equity-brown-400 hover:text-white focus:outline-none"
                href={""}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 384 512"
                >
                  <defs />
                  <path
                    fill="currentColor"
                    d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 160v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8z"
                  />
                </svg>
                <span className="hidden md:block">customActionTitle</span>
              </Link>
              <Link
                className="flex items-center space-x-1 rounded border border-equity-brown-500/50 p-3 text-sm text-equity-brown-500 transition hover:bg-equity-brown-500 hover:text-white focus:outline-none"
                href={""}
              >
                <HeroIcon className="h-5 w-5 stroke-current" name="PlusIcon" />
                <span className="hidden truncate px-1 text-sm font-medium md:block">
                  Create Title
                </span>
              </Link>
              <Link
                className="hidden items-center space-x-1 rounded border border-equity-brown-500/50 px-2 py-2.5 text-sm text-equity-brown-500 transition hover:bg-equity-brown-500 hover:text-white focus:outline-none"
                href={""}
              >
                <HeroIcon
                  className="h-5 w-5 stroke-current"
                  name="CloudArrowUpIcon"
                />
                <span className="hidden truncate md:block">Seed</span>
              </Link>
            </div>
          </div>
          <div className="border-b"></div>
        </div>

        <div className="grid h-96 items-center border-b border-gray-100">
          <div className=" hidden h-full place-items-center">
            {/* <loading-view /> */}
          </div>
          <div className="hidden w-full">
            <div className="w-full min-w-full divide-y divide-gray-100 border-b border-gray-100">
              <div
                v-for="(item, index) in data.results"
                key="item.id"
                className="px-8 py-4 transition-all hover:bg-gray-50"
              >
                {/* <slot
                      v-bind:index="index"
                      v-bind:item="item"
                      v-bind:currentPage="data.currentPage"
                    ></slot> */}
              </div>
            </div>
          </div>
          <div
            v-if="(!data || data?.results?.length === 0) && !isLoading"
            className="flex h-full items-center justify-center"
          >
            <span className="animate-pulse self-center text-xl font-semibold text-yellow-600">
              No records found.
            </span>
          </div>
        </div>

        <div className="flex items-end bg-gray-100/60 px-8 py-4">
          <nav v-if="!isEmpty(data) && data.pages" className="mx-auto">
            <div className="flex items-center">
              <span
                v-if="data.currentPage <= 1"
                className="w-full rounded-l-xl border bg-gray-50/60 p-3 text-base text-gray-600"
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronDoubleLeftIcon"
                />
              </span>
              <Link
                className="w-full rounded-l-xl border bg-white p-3 text-base text-gray-600 transition hover:bg-gray-100 hover:text-equity-brown-500"
                href={""}
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronDoubleLeftIcon"
                />
              </Link>
              <span
                v-if="data.currentPage <= 1"
                className="w-full border-y border-r bg-gray-50/60 p-3 text-base text-gray-600"
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronLeftIcon"
                />
              </span>
              <Link
                v-else
                className="w-full border-y border-r bg-white p-3 text-base text-gray-600 transition hover:bg-gray-100 hover:text-equity-brown-500"
                href={""}
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronLeftIcon"
                />
              </Link>
              <span className="w-full border-equity-brown-500 bg-equity-brown-500 px-4 py-2 text-base text-white odd:border-y even:border">
                1
              </span>
              {/* <template v-for="(page, index) in data.pages" key="index">
                    <span className="w-full border-equity-brown-500 bg-equity-brown-500 px-4 py-2 text-base text-white odd:border-y even:border"></span>
                    <Link
                      v-else
                      className="w-full bg-white px-4 py-2 text-base text-gray-600 transition odd:border-y even:border hover:bg-gray-100 hover:text-equity-brown-500"
                      href={""}
                    ></Link>
                  </template> */}

              <span
                v-if="data.currentPage === data.totalPages"
                className="w-full border-y border-r bg-gray-50/60 p-3 text-base text-gray-600"
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronRightIcon"
                />
              </span>
              <Link
                className="w-full border-y border-r bg-white p-3 text-base text-gray-600 transition hover:bg-gray-100 hover:text-equity-brown-500"
                href={""}
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronRightIcon"
                />
              </Link>
              <span className="w-full rounded-r-xl border-y border-r bg-gray-50/60 p-3 text-base text-gray-600">
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronDoubleRightIcon"
                />
              </span>
              <Link
                className="w-full rounded-r-xl border-y border-r bg-white p-3 text-base text-gray-600 transition hover:bg-gray-100 hover:text-equity-brown-500"
                href={""}
              >
                <HeroIcon
                  className="w-4 stroke-current"
                  name="ChevronDoubleRightIcon"
                />
              </Link>
            </div>
          </nav>
          {/* <slot name="nav-actions"></slot> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
