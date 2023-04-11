/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import * as Yup from "yup";

import Loading from "@/components/loading";
import { UpdateServiceModel, useService, useServices } from "@/model";

interface Props {
  open: boolean;
  setOpen: any;
  serviceId: string | number;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  code: Yup.string().required("Code is required"),
});

const UpdateService = ({ open, setOpen, serviceId }: Props) => {
  const { trigger } = UpdateServiceModel(serviceId);
  const { service, isLoading } = useService(serviceId);
  const { mutate } = useServices();

  const initialValues = {
    name: service?.data.name,
    code: service?.data.code,
    isActive: service?.data.isActive,
  };

  const onSubmit = async (values: any) => {
    const data = {
      name: values.name,
      code: values.code,
      isActive: values.isActive,
    };

    trigger({ data });

    await fetch("/api/update-service", {
      body: JSON.stringify(data),
    });

    mutate();
  };

  // const closeModalForm = () => {
  //   closeModal(true);
  // };

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
                    Add Service
                  </Dialog.Title>
                  {isLoading && (
                    <div className="mt-2">
                      <Loading />
                    </div>
                  )}
                  {!isLoading && (
                    <div className="px-8 py-5">
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

                            <div className="col-span-3 mt-5">
                              <div className="flex h-5 items-center">
                                <Field
                                  type="checkbox"
                                  id="isActive"
                                  name="isActive"
                                  checked={service?.data.isActive}
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

export default UpdateService;
