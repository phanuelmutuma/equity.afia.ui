import React from "react";

import { Main } from "@/base/Main";
import BaseList from "@/components/base";
import { Meta } from "@/layouts/Meta";
import { AppConfig } from "@/utils/AppConfig";

const index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      currentTab="Reports"
    >
      <BaseList
        data=""
        profileTemplate="ClinicServiceProfile"
        addButtonTemplate="AddClinic"
        add={false}
        createButtonName=""
        title="Reports"
        showBack={false}
        backRoute=""
      />
    </Main>
  );
};

export default index;
