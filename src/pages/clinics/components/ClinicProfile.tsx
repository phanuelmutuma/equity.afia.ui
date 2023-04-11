import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import HeroIcon from "@/icons/HeroIcon";

import DeleteClinic from "./forms/DeleteClinic";
import UpdateClinic from "./forms/UpdateClinic";
import ViewClinic from "./forms/ViewClinic";

interface Props {
  items: any;
}

const ClinicProfile = ({ items }: Props) => {
  const router = useRouter();
  const [viewOpen, setViewOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [clinicId, setClinicId] = useState(0);

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
    setClinicId(cId);
  };
  return (
    <div className="flex w-full justify-between">
      <ViewClinic open={viewOpen} setOpen={setViewOpen} clinicId={clinicId} />
      <UpdateClinic
        open={updateOpen}
        setOpen={setUpdateOpen}
        clinicId={clinicId}
      />
      <DeleteClinic
        open={deleteOpen}
        setOpen={setDeleteOpen}
        clinicId={clinicId}
      />
      <div>
        <div className="text-[10px] uppercase tracking-wider text-blue-500">
          {items?.email}
        </div>
        <div className="flex space-x-2 divide-x font-bold uppercase tracking-wide">
          <div>{items?.code}</div>
          <div className="pl-2">{items?.name}</div>
        </div>
        <div className="mt-1 flex space-x-2 divide-x text-[10px] uppercase tracking-wider text-equity-brown-500">
          <div className="">{items?.county} County</div>
          <div className="pl-2">{items?.subCounty} Sub County</div>
          <div className="pl-2">{items?.ward} Ward</div>
        </div>

        <div className="hidden text-[10px] uppercase tracking-wider text-equity-brown-500">
          Open:
          {typeof items?.operatingHour[0].days !== "string" ? (
            items?.operatingHour[0].days.map((item: any) => (
              <span key={item} className="mx-1">
                {item},
              </span>
            ))
          ) : (
            <span className="mx-1">{items?.operatingHour[0].days}</span>
          )}
        </div>
      </div>

      <div className="flex items-end gap-3">
        <button
          className="inline-flex rounded bg-slate-100 px-5 py-2 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-equity-brown-200 hover:shadow"
          onClick={() => handleItemClick(items.id, setViewOpen)}
        >
          <HeroIcon className="stroke-current text-sm" name="EyeIcon" />
          <span className="hidden truncate px-2 text-sm font-medium md:block">
            View Clinic
          </span>
        </button>

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
  );
};

export default ClinicProfile;
