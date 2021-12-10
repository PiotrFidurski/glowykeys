import { useRouter } from 'next/router';

export function useBreadcrumbs() {
  const router = useRouter();

  const { asPath } = router;

  const [, prevCrumb, currentCrumb] = asPath.split('/');

  return { prevCrumb, currentCrumb };
}
