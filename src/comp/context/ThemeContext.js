import React, { useContext, useEffect, useState } from "react";

const ThemeContext=React.createContext();


const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light");
    
    const changeTheme=()=>{
        let newTheme=undefined;
        setTheme((currentTheme)=>{
            if(currentTheme==="light"){
                newTheme="dark"
            }else{
                newTheme="light"
            }

            return newTheme;

        })

    }


    return(
        <ThemeContext.Provider
        value={{
            theme,
            changeTheme,
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


const useTheme=()=>{
    return useContext(ThemeContext);
}


export {ThemeContext,ThemeProvider,useTheme}