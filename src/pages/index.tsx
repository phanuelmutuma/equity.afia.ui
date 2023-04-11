import React from "react";

import { Main } from "@/base/Main";
import RepliedChart from "@/components/dashboard/RepliedChart";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

const index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      currentTab="Dashboard"
    >
      <div>
        <div className="px-6 py-4 text-3xl font-bold text-equity-yellow-700">
          Dashboard
        </div>
        <div className="justify-between md:flex">
          <div className="mx-4 mt-4 h-40 w-full rounded-lg bg-gray-100 px-2">
            <RepliedChart />
          </div>
          <div className="mx-4 mt-4 flex h-40 w-full flex-col rounded-lg bg-gray-100 px-2">
            <span className="px-5 text-6xl font-semibold">0</span>
            <span className="px-5 py-2">Feedback Messages</span>
          </div>
          <div className="mx-4 mt-4 flex h-40 w-full flex-col rounded-lg bg-gray-100 px-2">
            <span className="px-5 text-6xl font-semibold">0</span>
            <span className="px-5 py-2">Total Appointment Requests</span>
          </div>
        </div>
        <div className="mt-6 px-4 text-xl text-equity-yellow-700">
          Patient Feedback
        </div>
        <div className="mt-4 flex w-full flex-col">
          <div className="mx-4 flex h-[200px] flex-col rounded-lg bg-gray-100">
            {/* <span className="px-5 py-2 font-bold">Total Clinics</span> */}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default index;
