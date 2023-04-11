/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { Main } from "@/base/Main";
import BaseList from "@/components/base";
import Loading from "@/components/loading";
import { Meta } from "@/layouts/Meta";
import { useClinicServices } from "@/model";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const { clinicServices, isLoading, mutate } = useClinicServices();
  const router = useRouter();

  useEffect(() => {
    mutate();
  }, [router]);

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      currentTab="Clinic Services"
    >
      {isLoading && <Loading />}
      {!isLoading && (
        <BaseList
          data={clinicServices?.data}
          profileTemplate="ServiceProfile"
          addButtonTemplate="AddClinicService"
          add={true}
          createButtonName="Add Clinic Service"
          title={`${router.query.clinicName} Services`}
          showBack={true}
          backRoute="/clinic-services"
        />
      )}
    </Main>
  );
};

export default Index;
