import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchData<T>(apiUrl: string): Promise<T> {
  const url = new URL(apiUrl, API_URL);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Fetch response error: ${response.statusText}`);
    }

    return response.json() as T;
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
}

// react-query 적용
export default function useFetch<T>(
  apiUrl: string,
  key: QueryKey
): { data: T | undefined; error: unknown | null; isLoading: boolean; isError: boolean } {
  const { data, error, isLoading, isError } = useSuspenseQuery<T, Error>({
    queryKey: key,
    queryFn: () => fetchData<T>(apiUrl),
  });

  return { data, error, isLoading, isError };
}
