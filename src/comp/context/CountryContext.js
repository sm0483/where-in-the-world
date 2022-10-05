import React, { useContext, useEffect, useState } from "react";

const CountryContext=React.createContext();


const CountryProvider=({children})=>{
    const [countryList,setCountryList]=useState([]);
    const [sendList,setSendList]=useState([]);

    const searchData=(data)=>{
        const searchVar=data.toLowerCase();
        setSendList(()=>{
            const newList=countryList.filter((country)=>{
                const common=country.name.common.toLowerCase();
                const official=country.name.official.toLowerCase();
                if(searchVar===common || official===searchVar){
                    return country;
                }
                return null;
            })

            return newList;
        })
    }

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
                    setSendList(data);
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
            sendList,
            searchData
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