/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import * as Yup from "yup";

import Loading from "@/components/loading";
import { UpdateClinic, useClinic } from "@/model";

interface Props {
  open: boolean;
  setOpen: any;
  clinicId: string | number;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  code: Yup.string().required("Code is required"),
  county: Yup.string().required("County is required"),
  subCounty: Yup.string().required("Sub County is required"),
  ward: Yup.string().required("Ward is required"),
  latitude: Yup.string().required("Latitude is required"),
  longitude: Yup.string().required("Longitude is required"),
  tel: Yup.string().required("Telephone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const AddClinic = ({ open, setOpen, clinicId }: Props) => {
  const { trigger } = UpdateClinic(clinicId);
  const { clinic, isLoading } = useClinic(clinicId);

  const initialValues = {
    // name: clinic?.data.name,
    email: clinic?.data.email,
    code: clinic?.data.code,
    county: clinic?.data.county,
    subCounty: clinic?.data.subCounty,
    ward: clinic?.data.ward,
    latitude: clinic?.data.lattitude,
    longitude: clinic?.data.longitude,
    tel: clinic?.data.tel,
    isActive: clinic?.data.isActive,
    operatingHour: [
      {
        days: clinic?.data.operatingHour[0].days,
        start: clinic?.data.operatingHour[0].start,
        end: clinic?.data.operatingHour[0].end,
      },
    ],
  };

  const onSubmit = async (values: any) => {
    const data = {
      name: values.name,
      email: values.email,
      code: values.code,
      county: values.county,
      subCounty: values.subCounty,
      ward: values.ward,
      latitude: values.latitude,
      longitude: values.longitude,
      tel: values.tel,
      isActive: values.isActive,
      operatingHour: [
        {
          days: values.operatingHour[0].days,
          start: values.operatingHour[0].start,
          end: values.operatingHour[0].end,
        },
      ],
    };

    trigger({ data });

    await fetch("/api/update-clinic", {
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
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all lg:max-w-5xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Update Clinic
                  </Dialog.Title>
                  {isLoading && (
                    <div className="mt-2">
                      <Loading />
                    </div>
                  )}
                  {!isLoading && (
                    <div className="mt-6 px-3">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        {(formik: {
                          setFieldValue: (arg0: string, arg1: string) => void;
                          setFieldTouched: (
                            arg0: string,
                            arg1: boolean
                          ) => void;
                          isValid: any;
                        }) => (
                          <Form className="grid grid-cols-3 gap-6">
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="name"
                              >
                                Name
                              </label>
                              <Field
                                type="text"
                                id="name"
                                name="name"
                                value={clinic?.data.name}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="code"
                              >
                                Code
                              </label>
                              <Field
                                type="text"
                                id="code"
                                name="code"
                                value={clinic?.data.code}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="code"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="county"
                              >
                                County
                              </label>
                              <Field
                                type="text"
                                id="county"
                                name="county"
                                value={clinic?.data.county}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="county"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="subCounty"
                              >
                                Sub County
                              </label>
                              <Field
                                type="text"
                                id="subCounty"
                                name="subCounty"
                                value={clinic?.data.subCounty}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="subCounty"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="ward"
                              >
                                Ward
                              </label>
                              <Field
                                type="text"
                                id="ward"
                                name="ward"
                                value={clinic?.data.ward}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="ward"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="latitude"
                              >
                                Latitude
                              </label>
                              <Field
                                type="text"
                                id="latitude"
                                name="latitude"
                                value={clinic?.data.lattitude}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="latitude"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="longitude"
                              >
                                Longitude
                              </label>
                              <Field
                                type="text"
                                id="longitude"
                                name="longitude"
                                value={clinic?.data.longitude}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="longitude"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="tel"
                              >
                                Telephone number
                              </label>
                              <Field
                                type="text"
                                id="tel"
                                name="tel"
                                value={clinic?.data.tel}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="tel"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>
                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <Field
                                type="email"
                                id="email"
                                name="email"
                                value={clinic?.data.email}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>

                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="operatingHour[0].days"
                              >
                                Operating days
                              </label>

                              <Field
                                component="select"
                                id="operatingHour[0].days"
                                name="operatingHour[0].days"
                                value={clinic?.data.operatingHour[0].days}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                multiple={true}
                              >
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                              </Field>

                              <ErrorMessage
                                name="operatingHour[0].days"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>

                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="operatingHour[0].start"
                              >
                                Start time
                              </label>
                              <Field
                                type="time"
                                id="operatingHour[0].start"
                                name="operatingHour[0].start"
                                value={clinic?.data.operatingHour[0].start}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="operatingHour[0].start"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>

                            <div>
                              <label
                                className="text-sm font-medium"
                                htmlFor="operatingHour[0].end"
                              >
                                End time
                              </label>
                              <Field
                                type="time"
                                id="operatingHour[0].end"
                                name="operatingHour[0].end"
                                value={clinic?.data.operatingHour[0].end}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name="operatingHour[0].end"
                                component="div"
                                className="text-sm text-red-900"
                              />
                            </div>

                            <div className="col-span-3 mt-5">
                              <div className="flex h-5 items-center">
                                <Field
                                  type="checkbox"
                                  id="isActive"
                                  name="isActive"
                                  checked={
                                    clinic?.data.operatingHour[0].isActive
                                  }
                                  className="h-5 w-5 rounded border border-sky-300 bg-sky-50 focus:ring-blue-300"
                                />
                                <label
                                  className="ml-2 text-sm font-medium"
                                  htmlFor="isActive"
                                >
                                  Is Active
                                </label>
                              </div>
                            </div>
                            <div className="col-span-3 flex w-full items-end justify-end">
                              <button
                                type="submit"
                                className={`${
                                  !formik.isValid
                                    ? "cursor-not-allowed bg-blue-100 text-blue-900"
                                    : "cursor-pointer bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                } rounded-md border border-transparent px-20 py-3 text-sm font-medium`}
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
