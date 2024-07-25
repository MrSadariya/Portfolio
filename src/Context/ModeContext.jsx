import {React,createContext,useState} from "react";

export const ModeContext=createContext(false);

export const ModeContextProvider=(props)=>{

    const [isDark,SetisDark]=useState(false);

    return(
            <ModeContext.Provider value={{isDark,SetisDark}}>
                {props.children}
            </ModeContext.Provider>
    )
};

