import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext()

export default function CountryProvider({children}){
    const[country, setCountry] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
            .then(function (response) {
                setCountry(response.data)
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
            return null
        })
            .finally(function () {
            setLoading(false)
        });
        
        
    },[])

    return(
        <CountryContext.Provider value = {{country, setCountry, loading, setLoading}}>
            {children}
        </CountryContext.Provider>
    )
}