import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../context/context";
import { Link } from "react-router-dom";
import '../styles/searchBar.css'

export default function Search(){
    const {country, loading} = useContext(CountryContext);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(()=>{
        if(country.length > 0){
            const lowerCase = search.toLowerCase();
            const filtered = country.filter((country) =>
                country.name.common.toLowerCase().includes(lowerCase)
            );
            setFilter(filtered);
        }
    }, [search, country]);

    return(
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Find Country"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="container">
                <Link to="/" className="back-button">Back to Home</Link>
                <div className="grid grid-cols-3 gap-4 mt-16"> 
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filter.map((country) => (
                            <Link to={`/detail/${country.name.common}`} key={country.cca3}>
                                <div key={country.cca2} className="p-4 border country-card">
                                    Press to see more details...
                                    <img src={country.flags.png} alt={country.name.common} className="w-16 h-10"/>
                                    <p>{country.name.common}</p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}
