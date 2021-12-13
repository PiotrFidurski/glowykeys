import useSWR from 'swr';

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

export function useSearch<T>(query: string) {
  const { data, isValidating, error } = useSWR<T>(
    query.length ? `${process.env.BASE_URL}/api/search?query=${query}` : null,
    fetcher
  );

  return {
    data,
    isValidating,
    error,
  };
}
