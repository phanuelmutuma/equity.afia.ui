import React from "react";

import { Main } from "@/base/Main";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

const index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      currentTab=""
    >
      <div>{/* <Dashboard /> */}</div>
    </Main>
  );
};

export default index;
