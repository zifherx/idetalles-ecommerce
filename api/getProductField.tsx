import { iResultFilterType } from "@/types/filters";
import { useEffect, useState } from "react";

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;

  const [result, setResult] = useState<iResultFilterType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getQuery = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        setResult(json.data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };
    getQuery();
  }, [url]);

  return { loading, result, error };
}
