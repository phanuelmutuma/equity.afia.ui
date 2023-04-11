/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import * as Yup from "yup";

import { PostClinicService, useServices } from "@/model";

interface Props {
  open: boolean;
  setOpen: any;
}

const validationSchema = Yup.object({
  isAvailable: Yup.string().required("Name is required"),
});

const initialValues = {
  serviceId: 0,
  isAvailable: false,
  isSpecial: false,
  daysOffered: [
    {
      days: ["Monday"],
      start: {
        hour: 0,
        minute: 0,
      },
      end: {
        hour: 23,
        minute: 59,
      },
    },
  ],
};

const AddClinicService = ({ open, setOpen }: Props) => {
  const { trigger } = PostClinicService();
  const { services } = useServices();

  const router = useRouter();

  const onSubmit = async (values: any) => {
    const data = {
      clinicId: router.query.clinicId,
      serviceId: values.serviceId,
      isAvailable: values.isAvailable,
      isSpecial: values.isSpecial,
      daysOffered: [
        {
          days: values.daysOffered[0].days,
          start: values.daysOffered[0].start,
          end: values.daysOffered[0].end,
          daysDescription: "",
        },
      ],
    };

    trigger({ data });

    await fetch("/api/post-clinic-service", {
      body: JSON.stringify(data),
    });
  };

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
                    Add Clinic Service
                  </Dialog.Title>

                  <div className="px-8 py-5">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      {(formik: {
                        setFieldValue: (arg0: string, arg1: string) => void;
                        setFieldTouched: (arg0: string, arg1: boolean) => void;
                        isValid: any;
                      }) => (
                        <Form className="grid grid-cols-3 gap-6">
                          <div>
                            <label
                              className="text-sm font-medium"
                              htmlFor="serviceId"
                            >
                              Services
                            </label>
                            <Field
                              component="select"
                              id="serviceId"
                              name="serviceId"
                              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            >
                              <option value="">Select an option</option>
                              {services?.data.map((service: any) => (
                                <option key={service.id} value={service.id}>
                                  {service.name}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="serviceId"
                              component="div"
                              className="text-sm text-red-900"
                            />
                          </div>
                          <div>
                            <label
                              className="text-sm font-medium"
                              htmlFor="daysOffered[0].days"
                            >
                              Days Offered
                            </label>

                            <Field
                              component="select"
                              id="daysOffered[0].days"
                              name="daysOffered[0].days"
                              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              multiple={true}
                            >
                              <option value="Mon">Monday</option>
                              <option value="Tue">Tuesday</option>
                              <option value="Wed">Wednesday</option>
                              <option value="Thur">Thursday</option>
                              <option value="Fri">Friday</option>
                              <option value="Sat">Saturday</option>
                              <option value="Sun">Sunday</option>
                            </Field>

                            <ErrorMessage
                              name="daysOffered[0].days"
                              component="div"
                              className="text-sm text-red-900"
                            />
                          </div>

                          <div>
                            <label
                              className="text-sm font-medium"
                              htmlFor="daysOffered[0].start"
                            >
                              Start time
                            </label>
                            <Field
                              type="time"
                              id="daysOffered[0].start"
                              name="daysOffered[0].start"
                              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <ErrorMessage
                              name="daysOffered[0].start"
                              component="div"
                              className="text-sm text-red-900"
                            />
                          </div>

                          <div>
                            <label
                              className="text-sm font-medium"
                              htmlFor="daysOffered[0].end"
                            >
                              End time
                            </label>
                            <Field
                              type="time"
                              id="daysOffered[0].end"
                              name="daysOffered[0].end"
                              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <ErrorMessage
                              name="daysOffered[0].end"
                              component="div"
                              className="text-sm text-red-900"
                            />
                          </div>

                          <div className="mt-5">
                            <div className="flex h-5 items-center">
                              <Field
                                type="checkbox"
                                id="isAvailable"
                                name="isAvailable"
                                className="h-5 w-5 rounded border border-sky-300 bg-sky-50 focus:ring-blue-300"
                              />
                              <label
                                className="ml-2 text-sm font-medium"
                                htmlFor="isAvailable"
                              >
                                Is Available
                              </label>
                            </div>
                          </div>
                          <div className="col-span-2 mt-5">
                            <div className="flex h-5 items-center">
                              <Field
                                type="checkbox"
                                id="isSpecial"
                                name="isSpecial"
                                className="h-5 w-5 rounded border border-sky-300 bg-sky-50 focus:ring-blue-300"
                              />
                              <label
                                className="ml-2 text-sm font-medium"
                                htmlFor="isSpecial"
                              >
                                Is Special
                              </label>
                            </div>
                          </div>

                          <div className="col-span-3 flex w-full items-end justify-end border-t">
                            <button
                              type="submit"
                              className={`${
                                !formik.isValid
                                  ? "cursor-not-allowed bg-blue-100 text-blue-900"
                                  : "cursor-pointer bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              } mt-4 rounded-md border border-transparent px-20 py-3 text-sm font-medium`}
                              onClick={() => setOpen(false)}
                              disabled={!formik.isValid}
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddClinicService;
