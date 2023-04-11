/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import * as Yup from "yup";

import { DeleteClinicModel } from "@/model";

interface Props {
  open: boolean;
  setOpen: any;
  clinicId: string | number;
}

const DeleteClinic = ({ open, setOpen, clinicId }: Props) => {
  const { trigger } = DeleteClinicModel(clinicId);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
  });

  const initialValues = {
    name: "knlknl",
  };

  const onSubmit = async (values: any) => {
    const data = {
      name: values.name,
    };

    trigger({ data });

    await fetch("/api/delete-clinic", {
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
                <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirm Delete Clinic
                  </Dialog.Title>
                  <div className="mt-6 px-3">
                    <span>Are you sure you want to delete the Clinic?</span>
                    <Formik
                      onSubmit={onSubmit}
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                    >
                      {(formik: { isValid: any }) => (
                        <Form className="mt-9 grid grid-cols-3 gap-6">
                          <div className="col-span-3 flex w-full items-end justify-end">
                            <div className="hidden">
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
                            <button
                              type="submit"
                              className={`${
                                !formik.isValid
                                  ? "cursor-not-allowed bg-blue-100 text-blue-900"
                                  : "cursor-pointer bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              } rounded-md border border-transparent px-20 py-3 text-sm font-medium`}
                              onClick={() => setOpen(false)}
                            >
                              Delete Clinic
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

export default DeleteClinic;
