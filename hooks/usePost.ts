import { MutationKey, useMutation } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchPostData<T>(apiUrl: string, data: unknown): Promise<T> {
  const url = new URL(apiUrl, API_URL);
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Fetch response error: ${response.statusText}`);
    }

    return response.json() as T;
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
}

// react-query 적용
export default function usePost<T>(
  apiUrl: string,
  key: MutationKey,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  onSuccess: (data: any) => void,
  onError: () => void
): {
  // eslint-disable-next-line no-unused-vars
  mutate: (data: T) => void;
  data: T | undefined;
  error: unknown | null;
  isError: boolean;
} {
  const { mutate, data, error, isError } = useMutation<T, Error, T>({
    mutationKey: key,
    mutationFn: (postData) => fetchPostData<T>(apiUrl, postData),
    onSuccess,
    onError,
  });

  return { mutate, data, error, isError };
}
