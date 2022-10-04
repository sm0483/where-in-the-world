import React, { useContext, useEffect, useState } from "react";

const CountryContext=React.createContext();


const CountryProvider=({children})=>{
    const [countryList,setCountryList]=useState([]);

    useEffect(()=>{
        const controller=new AbortController();
        const getList=()=>{
            fetch('https://restcountries.com/v3.1/all',{signal:controller.signal})
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    // console.log(data);
                    setCountryList(data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }

        getList();
        return ()=>controller?.abort();

    },[])

    return (
        <CountryContext.Provider
        value={{
            countryList
        }}
        >
            {children}
        </CountryContext.Provider>
    )

}




const useCountry=()=>{
    return useContext(CountryContext);
}

export {CountryContext,CountryProvider,useCountry}