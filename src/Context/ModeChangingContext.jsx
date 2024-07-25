import React, { createContext, useState } from "react";

export const ModeChangingContext=createContext(false);

export const ModeChangingProvider=(props)=>{
    
    const [isChanging,SetisChanging]=useState(false);

    return(
        <ModeChangingContext.Provider value={{isChanging,SetisChanging}}>
            {props.children}
        </ModeChangingContext.Provider>
    )
}
