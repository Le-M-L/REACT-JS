import { useMemo } from 'react';
import store from '@/store';
export function useMenuSetting() {
    let { app } = store.getState();
    // const routesList = app.routesList;
    return {
        routesList:app.routesList
    };
}
