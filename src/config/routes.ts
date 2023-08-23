import { lazy } from 'react';
import BaseLayout from 'components/layouts/base-layout';
import { AppRoute } from '../components/app-routes';
export const routesPaths = {
    base: '/',
};
export const appRoutes: AppRoute[] = [
    {
        exact: true,
        path: routesPaths.base,
        layout: BaseLayout,
        component: lazy(() => import('../pages/Home')),
    },
    {
        exact: true,
        path: `${routesPaths.base}/:id`,
        layout: BaseLayout,
        component: lazy(() => import('../pages/Detail')),
    },
    {
        exact: true,
        path: '*',
        layout: BaseLayout,
        component: lazy(() => import('../pages/Home')),
    },
];
