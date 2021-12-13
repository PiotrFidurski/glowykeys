import { useRouter } from 'next/router';

export function useBreadcrumbs() {
  const router = useRouter();

  const { asPath } = router;

  const [, prevPath, currentPath] = asPath.split('/');

  return { prevPath, currentPath };
}
