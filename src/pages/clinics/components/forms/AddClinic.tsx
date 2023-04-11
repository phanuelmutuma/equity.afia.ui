/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import * as Yup from "yup";

import { PostClinic } from "@/model";

interface Props {
  open: boolean;
  setOpen: any;
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

const initialValues = {
  name: "",
  code: "",
  county: "",
  subCounty: "",
  ward: "",
  latitude: "",
  longitude: "",
  tel: "",
  email: "",
  isActive: true,
  operatingHour: [
    {
      days: ["Monday"],
      start: {
        hour: 8,
        minute: 0,
      },
      end: {
        hour: 17,
        minute: 0,
      },
    },
  ],
};

const AddClinic = ({ open, setOpen }: Props) => {
  const { trigger } = PostClinic();

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

    await fetch("/api/post-clinic", {
      body: JSON.stringify(data),
    });

    // try {
    //   const response = await fetch(
    //     "https://valentia-bot.azurewebsites.net/api/Clinic",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         values,
    //       }),
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //     }
    //   );
    //   await response.json();
    //   alert("Data Saved Successfully");
    // } catch (error) {
    //   console.error(error);
    //   alert("An error occurred while submitting the form");
    // }
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
                    Add Clinic
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
                              htmlFor="name"
                            >
                              Name
                            </label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
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
                              // onChange={(
                              //   event: React.ChangeEvent<HTMLSelectElement>
                              // ) => {
                              //   const { value } = event.target;
                              //   const timeParts = value.split(":");
                              //   const hour = parseInt(timeParts[0] || "", 10);
                              //   const minute = parseInt(timeParts[1] || "", 10);
                              //   formik.setFieldValue(
                              //     "operatingHour[0].start.hour",
                              //     hour.toString()
                              //   );
                              //   formik.setFieldTouched(
                              //     "operatingHour[0].start.hour",
                              //     true
                              //   );
                              //   formik.setFieldValue(
                              //     "operatingHour[0].start.minute",
                              //     minute.toString()
                              //   );
                              //   formik.setFieldTouched(
                              //     "operatingHour[0].start.minute",
                              //     true
                              //   );
                              // }}
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
                              // onChange={(
                              //   event: React.ChangeEvent<HTMLSelectElement>
                              // ) => {
                              //   const { value } = event.target;
                              //   const timeParts = value.split(":");
                              //   const hour = parseInt(timeParts[0] || "", 10);
                              //   const minute = parseInt(timeParts[1] || "", 10);
                              //   formik.setFieldValue(
                              //     "operatingHour[0].end.hour",
                              //     hour.toString()
                              //   );
                              //   formik.setFieldTouched(
                              //     "operatingHour[0].end.hour",
                              //     true
                              //   );
                              //   formik.setFieldValue(
                              //     "operatingHour[0].end.minute",
                              //     minute.toString()
                              //   );
                              //   formik.setFieldTouched(
                              //     "operatingHour[0].end.minute",
                              //     true
                              //   );
                              // }}
                              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <ErrorMessage
                              name="operatingHour[0].end"
                              component="div"
                              className="text-sm text-red-900"
                            />
                          </div>
                          {/* <div className="hidden">
                            <label htmlFor="operatingHour[0].start.hour">
                              Start hour
                            </label>
                            <Field
                              type="number"
                              id="operatingHour[0].start.hour"
                              name="operatingHour[0].start.hour"
                            />
                            <ErrorMessage
                              name="operatingHour[0].start.hour"
                              component="div"
                            />
                          </div>
                          <div className="hidden">
                            <label htmlFor="operatingHour[0].start.minute">
                              Start minute
                            </label>
                            <Field
                              type="number"
                              id="operatingHour[0].start.minute"
                              name="operatingHour[0].start.minute"
                            />
                            <ErrorMessage
                              name="operatingHour[0].start.minute"
                              component="div"
                            />
                          </div>
                          <div className="hidden">
                            <label htmlFor="operatingHour[0].end.hour">
                              End hour
                            </label>
                            <Field
                              type="number"
                              id="operatingHour[0].end.hour"
                              name="operatingHour[0].end.hour"
                            />
                            <ErrorMessage
                              name="operatingHour[0].end.hour"
                              component="div"
                            />
                          </div>
                          <div className="hidden">
                            <label htmlFor="operatingHour[0].end.minute">
                              End minute
                            </label>
                            <Field
                              type="number"
                              id="operatingHour[0].end.minute"
                              name="operatingHour[0].end.minute"
                            />
                            <ErrorMessage
                              name="operatingHour[0].end.minute"
                              component="div"
                            />
                          </div> */}

                          <div className="col-span-3 mt-5">
                            <div className="flex h-5 items-center">
                              <Field
                                type="checkbox"
                                id="isActive"
                                name="isActive"
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

export default AddClinic;
