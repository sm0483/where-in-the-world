const searchCountry=(countryList,search)=>{
    const len=search.length;
    const newList=countryList.filter((country)=>{
        const common=country.name.common.toLowerCase().substring(0,len);
        if(common===search){
            return country;
        }
        return null;

    })

    return newList;
}

export default searchCountry;