import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import HeroIcon from "@/icons/HeroIcon";

import DeleteClinicService from "../forms/DeleteClinicService";
import UpdateClinicService from "../forms/UpdateClinicService";

interface Props {
  items: any;
}

const ServiceProfile = ({ items }: Props) => {
  const router = useRouter();
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [serviceId, setServiceId] = useState(0);

  useEffect(() => {
    if (updateOpen || deleteOpen) {
      router.push({ query: { ...router.query, modal: "true" } }, undefined, {
        shallow: true,
      });
    } else {
      router.push({ query: { ...router.query, modal: "" } }, undefined, {
        shallow: true,
      });
    }
  }, [updateOpen, deleteOpen]);

  const handleItemClick = (
    cId: React.SetStateAction<number>,
    type: {
      (value: React.SetStateAction<boolean>): void;
      (arg0: boolean): void;
    }
  ) => {
    type(true);
    setServiceId(cId);
    router.beforePopState(() => {
      return false;
    });
  };
  return (
    <div>
      <UpdateClinicService
        open={updateOpen}
        setOpen={setUpdateOpen}
        serviceId={serviceId}
      />
      <DeleteClinicService
        open={deleteOpen}
        setOpen={setDeleteOpen}
        serviceId={serviceId}
      />
      {items?.clinic.id ===
        parseInt(router.query.clinicId?.toString() || "", 10) && (
        <div className="flex w-full justify-between">
          <div>
            <div className="flex space-x-2 divide-x uppercase tracking-wide">
              <div className="text-[10px] uppercase tracking-wider text-blue-500">
                {items?.isAvailable ? "Available" : "Not available"}
              </div>
              <div className="pl-2 text-[10px] uppercase tracking-wider text-equity-yellow-500">
                {items?.isSpecial ? "Special" : "Not Special"}
              </div>
              <div className="pl-2 text-[10px] uppercase tracking-wider text-green-500">
                {items?.service.isActive ? "Active" : "Not Active"}
              </div>
            </div>
            <div className="flex space-x-2 divide-x pt-1 font-bold uppercase tracking-wide">
              <div>{items?.service.code}</div>
              <div className="pl-2">{items?.service.name}</div>
            </div>
            <div className="flex py-1 text-[10px] uppercase tracking-wider text-equity-brown-500">
              Days Offered:
              {typeof items?.daysOffered[0].days !== "string" ? (
                items?.daysOffered[0].days.map((item: any) => (
                  <span key={item} className="mx-1">
                    {item},
                  </span>
                ))
              ) : (
                <span className="mx-1">{items?.daysOffered[0].days}</span>
              )}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-equity-brown-500">
              Time Offered:
              <span className="ml-1">{items?.daysOffered[0].start} - </span>
              <span>{items?.daysOffered[0].end}</span>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <button
              className="inline-flex rounded bg-slate-100 px-4 py-2 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-equity-brown-200 hover:shadow"
              onClick={() => handleItemClick(items.id, setUpdateOpen)}
            >
              <HeroIcon
                className="stroke-current text-sm"
                name="ArrowPathIcon"
              />
              <span className="hidden truncate px-2 text-sm font-medium md:block">
                Update
              </span>
            </button>

            <button
              className="inline-flex rounded bg-slate-100 px-4 py-2 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-equity-red-300 hover:shadow"
              onClick={() => handleItemClick(items.id, setDeleteOpen)}
            >
              <HeroIcon className="stroke-current text-sm" name="TrashIcon" />
              <span className="hidden truncate px-2 text-sm font-medium md:block">
                Delete
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceProfile;
