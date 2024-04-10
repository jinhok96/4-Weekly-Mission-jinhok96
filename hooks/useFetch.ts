import { useQuery } from 'react-query';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchData(apiUrl: string) {
  const url = new URL(apiUrl, API_URL);
  try {
    const response = await fetch(url);
    const result = await response.json();

    const responseError = result?.error ?? 'Fetch response failed';

    if (!response.ok) {
      throw new Error(`User response error: ${responseError}`);
    }

    return result;
  } catch (errorData) {
    throw new Error(`Fetch error: ${errorData}`);
  }
}

// react-query 적용
export default function useFetch<T>(
  apiUrl: string,
  key: string[]
): { data: T | undefined; error: unknown | null; isLoading: boolean; isError: boolean } {
  const { data, error, isLoading, isError } = useQuery<T>(key, () => fetchData(apiUrl));

  return { data, error, isLoading, isError };
}
