import Link from "next/dist/client/link";
import React from "react";

import HeroIcon from "@/icons/HeroIcon";

interface Props {
  items: any;
}

const ClinicServiceProfile = ({ items }: Props) => {
  return (
    <div className="flex w-full justify-between">
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
        <Link
          className="inline-flex rounded bg-slate-100 px-5 py-2 text-sm font-medium tracking-wide text-equity-red-900 transition hover:bg-equity-brown-200 hover:shadow"
          href={{
            pathname: "/clinic-services/services/",
            query: {
              clinicId: items?.id,
              clinicName: items?.name,
            },
          }}
        >
          <HeroIcon className="stroke-current text-sm" name="EyeIcon" />
          <span className="hidden truncate px-2 text-sm font-medium md:block">
            View Services
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ClinicServiceProfile;
