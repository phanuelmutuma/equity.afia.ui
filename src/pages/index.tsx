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
    >
      <div>
        <div className="px-4 text-3xl font-bold text-equity-yellow-700">
          Dashboard
        </div>
        <div className="flex justify-between">
          <div className="mx-4 mt-4 h-40 w-80 rounded-lg bg-gray-100 px-2">
            <RepliedChart />
          </div>
          <div className="mx-4 mt-4 flex h-40 w-80 flex-col rounded-lg bg-gray-100 px-2">
            <span className="px-5 text-6xl font-semibold">0</span>
            <span className="px-5 py-2">Feedback Messages</span>
          </div>
          <div className="mx-4 mt-4 flex h-40 w-80 flex-col rounded-lg bg-gray-100 px-2">
            <span className="px-5 text-6xl font-semibold">0</span>
            <span className="px-5 py-2">Total Clinics</span>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default index;
