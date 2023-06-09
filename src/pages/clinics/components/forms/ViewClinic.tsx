/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import Loading from "@/components/loading";
import { useClinic } from "@/model";

interface Props {
  open: boolean;
  setOpen: any;
  clinicId: string | number;
}

const AddClinic = ({ open, setOpen, clinicId }: Props) => {
  const { clinic, isLoading } = useClinic(clinicId);
  return (
    <>
      <Transition appear show={open || false} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all lg:max-w-5xl">
                  <Dialog.Title
                    as="h3"
                    className="rounded-t bg-equity-yellow-100 px-8 py-4 text-xl font-bold leading-6 text-equity-yellow-900"
                  >
                    View Clinic
                  </Dialog.Title>
                  {isLoading && (
                    <div className="mt-2">
                      <Loading />
                    </div>
                  )}
                  {!isLoading && (
                    <div className="px-8 py-7">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <label className="text-sm font-medium" htmlFor="name">
                            Name
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.name}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium" htmlFor="code">
                            Code
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.code}
                          </div>
                        </div>
                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="county"
                          >
                            County
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.county}
                          </div>
                        </div>
                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="subCounty"
                          >
                            Sub County
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.subCounty}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium" htmlFor="ward">
                            Ward
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.ward}
                          </div>
                        </div>
                        <div className="hidden">
                          <label
                            className="text-sm font-medium"
                            htmlFor="latitude"
                          >
                            Latitude
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.latitude}
                          </div>
                        </div>
                        <div className="hidden">
                          <label
                            className="text-sm font-medium"
                            htmlFor="longitude"
                          >
                            Longitude
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.longitude}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium" htmlFor="tel">
                            Telephone number
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.tel}
                          </div>
                        </div>
                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.email}
                          </div>
                        </div>

                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="operatingHour[0].days"
                          >
                            Operating days
                          </label>

                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {typeof clinic?.data.operatingHour[0].days !==
                            "string" ? (
                              clinic?.data.operatingHour[0].days.map(
                                (item: any) => (
                                  <span key={item} className="mx-1">
                                    {item},
                                  </span>
                                )
                              )
                            ) : (
                              <span className="mx-1">
                                {clinic?.data.operatingHour[0].days}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="operatingHour[0].start"
                          >
                            Start time
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.operatingHour[0].start}
                          </div>
                        </div>

                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="operatingHour[0].end"
                          >
                            End time
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.operatingHour[0].end}
                          </div>
                        </div>

                        <div>
                          <label
                            className="text-sm font-medium"
                            htmlFor="operatingHour[0].end"
                          >
                            Status
                          </label>
                          <div className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900">
                            {clinic?.data.isActive ? "Active" : "Disabled"}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddClinic;
