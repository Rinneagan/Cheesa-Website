import { useState, useEffect } from "react";
import { client } from "../client";
import { executives_query } from "../constants/page";
import { ExecutiveResponse } from "../types/types";

export type FetchStatus = "Fetching" | "Error" | "Success" | null;
export default function useFetch() {
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
