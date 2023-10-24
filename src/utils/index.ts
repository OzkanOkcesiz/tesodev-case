import router from '@/router';

export const getQuerystring = (key?: string): any => {
  if (!key) return router.currentRoute.value.query;
  const querystring = router.currentRoute.value.query[key] as string;
  return querystring || '';
};
