/* eslint-disable no-lonely-if */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import HeroIcon from "@/icons/HeroIcon";
import ClinicServiceProfile from "@/pages/clinic-services/components/ClinicServiceProfile";
import ServiceProfile from "@/pages/clinic-services/components/ServiceProfile";
import AddClinicService from "@/pages/clinic-services/forms/AddClinicService";
import ClinicProfile from "@/pages/clinics/components/ClinicProfile";
import AddClinic from "@/pages/clinics/components/forms/AddClinic";
import ServicesProfile from "@/pages/service-setup/components/ServicesProfile";
import AddService from "@/pages/service-setup/forms/AddService";

interface Props {
  data: any;
  profileTemplate:
    | "ClinicProfile"
    | "ClinicServiceProfile"
    | "ServiceProfile"
    | "ServicesProfile";
  addButtonTemplate: "AddClinic" | "AddService" | "AddClinicService";
  createButtonName: string;
  title: string;
  add: boolean;
  showBack: boolean;
  backRoute: string;
}

const profile = {
  ClinicProfile,
  ClinicServiceProfile,
  ServiceProfile,
  ServicesProfile,
};

const addButton = {
  AddClinic,
  AddService,
  AddClinicService,
};

const BaseList = ({
  data,
  profileTemplate,
  addButtonTemplate,
  createButtonName,
  add,
  title,
  showBack,
  backRoute,
}: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const ComponentToRender = profile[profileTemplate];
  const ButtonToRender = addButton[addButtonTemplate];

  useEffect(() => {
    if (isOpen) {
      router.push({ query: { ...router.query, modal: "true" } }, undefined, {
        shallow: true,
      });
    } else {
      if (modal) {
        router.push({ query: { ...router.query, modal: "" } }, undefined, {
          shallow: true,
        });
        setModal(false);
      }
    }
  }, [isOpen]);
  return (
    <div>
      <div>
        <ButtonToRender open={isOpen} setOpen={setIsOpen} />
        <div className="rounded-t-lg bg-equity-brown-900 py-3">
          <div className="flex items-center gap-2 px-5 md:gap-4">
            <div className="flex w-full">
              {showBack && (
                <Link
                  type="button"
                  className="flex items-center justify-center rounded-full bg-transparent p-2 text-6xl font-medium text-gray-200 outline-none transition hover:bg-equity-brown-100/10 hover:text-equity-brown-100 focus:outline-none"
                  title="Back"
                  href={backRoute}
                >
                  <HeroIcon
                    className="h-6 w-6 stroke-current"
                    name="ArrowLeftIcon"
                  />
                </Link>
              )}

              <h3 className="ml-2 inline-flex items-center space-x-2 py-4 text-equity-brown-500">
                <div className="flex items-start space-x-1 text-equity-brown-100/60">
                  <span className="truncate pl-2 font-bold uppercase leading-none tracking-wider text-equity-brown-100 antialiased">
                    {title}
                  </span>
                </div>
              </h3>
            </div>
            {add && (
              <div className="flex w-full items-center justify-end space-x-1">
                <button
                  className="inline-flex rounded bg-white px-7 py-2 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-equity-brown-300"
                  onClick={() => {
                    setIsOpen(true);
                    setModal(true);
                  }}
                >
                  <HeroIcon
                    className="h-5 w-5 stroke-current"
                    name="PlusIcon"
                  />
                  <span className="hidden truncate px-2 text-sm font-medium md:block">
                    {createButtonName}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex ${
            data?.length === 0 && "items-center"
          } mt-2 justify-center`}
          style={{ minHeight: "calc(100vh - 20rem)" }}
        >
          {data?.length !== 0 && (
            <div className="w-full">
              <div className="w-full min-w-full divide-y divide-gray-100 border-b border-gray-100">
                {data?.map((item: { id: React.Key | null | undefined }) => (
                  <div
                    key={item.id}
                    className="px-8 py-4 transition-all hover:bg-gray-50"
                  >
                    <ComponentToRender items={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {data?.length === 0 && (
            <div className="flex w-full items-center justify-center">
              <Link
                href="#"
                className="block max-w-xl rounded-lg border border-gray-200 bg-white px-6 py-7"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>

                <h5 className="mb-2 mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                  No data yet
                </h5>
                <p className="font-normal text-gray-700 ">
                  No data found for the particular request. The requested data
                  is not available yet
                </p>
              </Link>
              {/* <span className=" self-center text-xl font-semibold text-equity-red-600">
                No data found!
              </span> */}
            </div>
          )}
        </div>

        <div className="hidden items-end bg-gray-100/60 px-8 py-4">
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

export default BaseList;
