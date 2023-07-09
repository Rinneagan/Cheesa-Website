import { useState, useEffect } from "react";
import { client } from "../client";
import {
  executives_query,
  gallery_query,
  lecturer_query,
} from "../constants/page";
import {
  ExecutiveResponse,
  LecturersResponse,
  GalleryResponse,
} from "../types/types";

export type FetchStatus = "Fetching" | "Error" | "Success" | null;

function useFetchExecutives() {
  const [data, setData] = useState<ExecutiveResponse>();
  const [status, setStatus] = useState<FetchStatus>(null);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("Fetching");
      try {
        const response = await client.fetch<ExecutiveResponse>(
          executives_query
        );
        setData(response);
        setStatus("Success");
      } catch (err) {
        console.log({ message: err });
        setStatus("Error");
      }
    };
    fetchData();
  }, []);

  return { data, status };
}

function useFetchGallery() {
  const [data, setData] = useState<GalleryResponse>([]);
  const [status, setStatus] = useState<FetchStatus>(null);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("Fetching");
      try {
        const response = await client.fetch<GalleryResponse>(gallery_query);
        setData(response);
        setStatus("Success");
      } catch (err) {
        console.log({ message: err });
        setStatus("Error");
      }
    };
    fetchData();
  }, []);

  return { data, status };
}

function useFetchLecturers() {
  const [data, setData] = useState<LecturersResponse>([]);
  const [status, setStatus] = useState<FetchStatus>(null);
  useEffect(() => {
    const fetchData = async () => {
      setStatus("Fetching");
      try {
        const response = await client.fetch<LecturersResponse>(lecturer_query);
        setData(response);
        setStatus("Success");
      } catch (err) {
        console.log({ message: err });
        setStatus("Error");
      }
    };

    fetchData();
  }, []);

  return { data, status };
}

export { useFetchExecutives, useFetchGallery, useFetchLecturers };
