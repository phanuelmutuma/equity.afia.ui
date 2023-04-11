/* eslint-disable import/no-extraneous-dependencies */
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import fetcher from "@/utils/fetcher";
import mutationDeleteFetcher from "@/utils/mutationDeleteFetcher";
import mutationFetcher from "@/utils/mutationFetcher";
import mutationPutFetcher from "@/utils/mutationPutFetcher";

export const useClinics = () => {
  const { data, error, isLoading } = useSWR(`/api/get-clinics/`, fetcher);
  return {
    clinics: data,
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
