import { useEffect, useState } from "react";

export function useGetCategoryProduct(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;

  const [result, setResult] = useState(null);
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
