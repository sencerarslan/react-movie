import { lazy } from 'react';
import BaseLayout from 'components/layouts/base-layout';
import { AppRoute } from '../components/app-routes';
export const routesPaths = {
    base: '/',
    home: '/home',
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
        path: routesPaths.home,
        layout: BaseLayout,
        component: lazy(() => import('../pages/Home')),
    },
    {
        exact: true,
        path: '*',
        layout: BaseLayout,
        component: lazy(() => import('../pages/Home')),
    },
];
