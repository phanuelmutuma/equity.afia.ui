import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import HeroIcon from "@/icons/HeroIcon";

import DeleteService from "../forms/DeleteService";
import UpdateService from "../forms/UpdateService";

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
      router.push("?modal=true", undefined, { shallow: true });
    } else {
      router.replace("", undefined, { shallow: true });
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
      <UpdateService
        open={updateOpen}
        setOpen={setUpdateOpen}
        serviceId={serviceId}
      />
      <DeleteService
        open={deleteOpen}
        setOpen={setDeleteOpen}
        serviceId={serviceId}
      />
      <div className="flex w-full justify-between">
        <div>
          <div className="flex space-x-2 divide-x font-bold uppercase tracking-wide">
            <div className="text-[10px] uppercase tracking-wider text-green-500">
              {items?.isActive ? "Active" : "Not Active"}
            </div>
          </div>
          <div className="mt-1 flex space-x-2 divide-x font-bold uppercase tracking-wide">
            <div>Code: {items?.code}</div>
            <div className="pl-2">{items?.name}</div>
          </div>
        </div>

        <div className="flex items-end gap-3">
          <button
            className="inline-flex rounded bg-slate-100 px-4 py-2 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-equity-brown-200 hover:shadow"
            onClick={() => handleItemClick(items.id, setUpdateOpen)}
          >
            <HeroIcon className="stroke-current text-sm" name="ArrowPathIcon" />
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
    </div>
  );
};

export default ServiceProfile;
