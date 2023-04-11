/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { Main } from "@/base/Main";
import BaseList from "@/components/base";
import Loading from "@/components/loading";
import { Meta } from "@/layouts/Meta";
import { useClinics } from "@/model";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const { clinics, isLoading } = useClinics();

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      currentTab="All Clinics"
    >
      {isLoading && <Loading />}
      {!isLoading && (
        <BaseList
          data={clinics?.data}
          profileTemplate="ClinicProfile"
          addButtonTemplate="AddClinic"
          createButtonName="Add Clinic"
          title="Clinics"
          add={true}
          showBack={false}
          backRoute=""
        />
      )}
    </Main>
  );
};

export default Index;
