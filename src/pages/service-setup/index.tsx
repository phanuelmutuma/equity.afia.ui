/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { Main } from "@/base/Main";
import BaseList from "@/components/base";
import Loading from "@/components/loading";
import { Meta } from "@/layouts/Meta";
import { useServices } from "@/model";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const router = useRouter();
  const { services, isLoading, mutate } = useServices();

  useEffect(() => {
    console.log(router.events);
    mutate();
  }, [router]);

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
      currentTab="Service Setup"
    >
      {isLoading && <Loading />}
      {!isLoading && (
        <BaseList
          data={services?.data}
          profileTemplate="ServicesProfile"
          addButtonTemplate="AddService"
          add={true}
          createButtonName="Add Service"
          title="Services"
          showBack={false}
          backRoute=""
        />
      )}
    </Main>
  );
};

export default Index;
