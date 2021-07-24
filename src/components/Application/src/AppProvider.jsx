import React, { useState } from "react"
// 断点布局
// import { createBreakpointListen } from '@/config/hooks/event/useBreakpoint';
// console.log(createBreakpointListen)

const AppContext = React.createContext(undefined);
AppContext.displayName = "AppContext"


export const AppProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(null);

    // const createBreakpointListen = ({ screenMap, sizeEnum, width }) => {
    //     const lgWidth = screenMap.get(sizeEnum.LG);
    //     if (lgWidth) {
    //         isMobile.value = width.value - 1 < lgWidth;
    //     }
    //     // handleRestoreState();
    // }

    return <AppContext.Provider children={children} value={{isMobile }} />
}

export const useAppProvider = () => {
    const context = React.useContext(AppContext)
    if (!context) {
        throw new Error('useAuth必须在AppProvider中使用')
    }
    return context
}