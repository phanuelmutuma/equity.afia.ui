/* eslint-disable import/no-extraneous-dependencies */
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import fetcher from "@/utils/fetcher";
import mutationDeleteFetcher from "@/utils/mutationDeleteFetcher";
import mutationFetcher from "@/utils/mutationFetcher";
import mutationPutFetcher from "@/utils/mutationPutFetcher";

export const useClinics = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/get-clinics/`,
    fetcher
  );
  return {
    clinics: data,
    isLoading,
    isError: error,
    mutate,
  };
};

export const useClinic = (clinicId: any) => {
  const { data, error, isLoading } = useSWR(
    `/api/get-clinic/${clinicId}`,
    fetcher
  );
  return {
    clinic: data,
    isLoading,
    isError: error,
  };
};

export const PostClinic = () => {
  const { trigger } = useSWRMutation("/api/post-clinic", mutationFetcher);
  return {
    trigger,
  };
};

export const UpdateClinic = (clinicId: any) => {
  const { trigger } = useSWRMutation(
    `/api/update-clinic/${clinicId}`,
    mutationPutFetcher
  );
  return {
    trigger,
  };
};

export const DeleteClinicModel = (clinicId: any) => {
  const { trigger } = useSWRMutation(
    `/api/delete-clinic/${clinicId}`,
    mutationDeleteFetcher
  );
  return {
    trigger,
  };
};

export const useServices = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/get-services`,
    fetcher
  );
  return {
    services: data,
    isLoading,
    isError: error,
    mutate,
  };
};

export const useService = (serviceId: any) => {
  const { data, error, isLoading } = useSWR(
    `/api/get-service/${serviceId}`,
    fetcher
  );
  return {
    service: data,
    isLoading,
    isError: error,
  };
};

export const PostService = () => {
  const { trigger } = useSWRMutation("/api/post-service", mutationFetcher);
  return {
    trigger,
  };
};

export const UpdateServiceModel = (serviceId: any) => {
  const { trigger } = useSWRMutation(
    `/api/update-service/${serviceId}`,
    mutationPutFetcher,
    { revalidate: true }
  );
  return {
    trigger,
  };
};

export const DeleteServiceModel = (serviceId: any) => {
  const { trigger } = useSWRMutation(
    `/api/delete-service/${serviceId}`,
    mutationDeleteFetcher
  );
  return {
    trigger,
  };
};

export const useClinicServices = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/get-clinic-services`,
    fetcher
  );
  return {
    clinicServices: data,
    isLoading,
    isError: error,
    mutate,
  };
};

export const useClinicService = (serviceId: any) => {
  const { data, error, isLoading } = useSWR(
    `/api/get-clinic-service/${serviceId}`,
    fetcher
  );
  return {
    clinicService: data,
    isLoading,
    isError: error,
  };
};

export const PostClinicService = () => {
  const { trigger } = useSWRMutation(
    "/api/post-clinic-service",
    mutationFetcher
  );
  return {
    trigger,
  };
};

export const UpdateClinicServiceModel = (serviceId: any) => {
  const { trigger } = useSWRMutation(
    `/api/update-clinic-service/${serviceId}`,
    mutationPutFetcher,
    { revalidate: true }
  );
  return {
    trigger,
  };
};

export const DeleteClinicServiceModel = (serviceId: any) => {
  const { trigger } = useSWRMutation(
    `/api/delete-clinic-service/${serviceId}`,
    mutationDeleteFetcher
  );
  return {
    trigger,
  };
};
