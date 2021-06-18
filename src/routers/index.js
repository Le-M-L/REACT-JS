import React, { lazy } from 'react';

export const Routers = [
    {
        path: '/home',
        component: lazy(() => import('../views/Home')),
    },
    {
        path: '/about',
        component: lazy(() => import('../views/About')),
    },
];
