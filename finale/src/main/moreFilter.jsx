import { useContext, useEffect, useState } from "react"
import { CountryContext } from "../context/context";
import axios from "axios";
import { Link } from "react-router-dom";


export default function MoreFilter(){
    const { country, setCountry, loading, setLoading } = useContext(CountryContext);    
    const [region,setRegion] = useState('');
    const [language,setLanguage] = useState('');
    const [independent,setIndependent] = useState(false);
    const [moreFiltered,setMoreFiltered] = useState([]);

    useEffect(()=>{
        const fetchFilteredCountries = async()=>{
            setLoading(true);
            let url = 'https://restcountries.com/v3.1/all';

            if(region){
                url = `https://restcountries.com/v3.1/region/${region}`;
            }else if(language){
                url = `https://restcountries.com/v3.1/lang/${language}`;
            }else if(independent){
                url = `https://restcountries.com/v3.1/independent?status=true`;
            }

            try{
                const response = await axios.get(url);
                let data = response.data
                if(region){
                    data = data.filter((country)=>country.region.toLowerCase()===region.toLowerCase());
                }

                if(language){
                    data = data.filter((country)=>Object.values(country.languages||{}).some(lang=>lang.toLowerCase().includes(language.toLowerCase())));
                }
                if(independent){
                    data = data.filter((country)=>country.independent);
                }
                setMoreFiltered(data);
                setMoreFiltered(data);
            }catch(error){
                console.log(error);
                return null
            }
            setLoading(false)
        };
        fetchFilteredCountries();

    }, [region, language, independent, setCountry, setLoading]);
    if(loading)
        return
            <div>
                Loading...
            </div>

    return(
        <>
            <div>
                <button>
                    <Link to="/" className="back-button">Back to Home</Link>
                </button>
            </div>
            <br /><br />
            <div className="filter-container">
                <h1 className="font-bold mb-2">Filter Countries</h1>
                <div className="filters mb-4">
                    <select value={region} onChange={(e)=>setRegion(e.target.value)} className="p-2 border mr-2">
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>

                    <input 
                    type="text" 
                    placeholder="Enter language"
                    value={language}
                    onChange={(e)=>setLanguage(e.target.value)} className="p-2 border mr-2"/>

                    <label className="mr-2">
                        <input 
                        type="checkbox" 
                        checked={independent}
                        onChange={(e)=>setIndependent(e.target.checked)}
                        className="mr-1"
                        />
                        Independent Countries Only
                    </label>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {moreFiltered.map((country)=>(
                        <Link to={`/detail/${country.name.common}`} key={country.cca3} className="country-card p-4 border">
                            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="w-16 h-10 mb-2"/>
                            <h3 className="font-bold">{country.name.common}</h3>
                        </Link>
                    ))}

                </div>
            </div>
        </>
    )
}