import useSWR from 'swr';

const fetcher = async (...args: string[]) => {
  const [url] = args;

  return fetch(url).then((res) => res.json());
};

export function useSearch<T>(query: string) {
  const { data, isValidating, error } = useSWR<T>(query.length ? [`/api/search?query=${query}`, query] : null, fetcher);

  return {
    data,
    isValidating,
    error,
  };
}
