"use client";

import { fetchCatData } from "@/api/catFactsApi";
import { CatFact } from "@/types/catfact-types";
import { useEffect, useState } from "react";

export default function csr() {
  const [isLoading, setIsLoading] = useState(true);
  const [catData, setCatData] = useState<CatFact>({ fact: "", length: 0 });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCatData();
        setCatData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("failed to fetchCatData", error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div>...Loading</div>;

  return (
    <div className="flex flex-row">
      <h1>CSR</h1>
      <h2>FACT</h2>
      <a>{catData?.fact}</a>
      <h2>LENGTH</h2>
      <a> {catData?.length}</a>
    </div>
  );
}
