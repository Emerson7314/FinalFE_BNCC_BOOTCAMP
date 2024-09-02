import { useContext } from "react"
import { CountryContext } from "../context/context"
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Home(){
    const {country, loading} = useContext(CountryContext);

    if(loading)
        return(
            <div>
                Loading....
            </div>
        )

    const popularCountries = country.filter((country)=>
    ["France", "Argentina", "Japan", "Germany", "South Korea", "United Kingdom"].includes(country.name.common)
    );

    
    return(
        <>
            <nav className="navbar">
                <div className="navbar-brand">World University</div>
                <div className="navbar-toggle" onClick={() => toggleNavbar()}>&#9776;</div>
                <ul className="navbar-nav">
                    <li><Link to="/search">Country Search</Link></li>
                    <li><Link to="/filter">Country Filter</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    
        
                </ul>
            </nav>
            <div>
                <h1 className="font-bold">World University</h1>
                <p>Simple Wesbite to Get Countries Information</p>
                <br />
                <h2 className="popular-countries">Popular Countries</h2>
                <div className="grid grid-cols-2 gap-4">
                    {popularCountries.map((country) => (
                    <div key={country.cca2} className="country-card">
                        <img src={country.flags.png} alt={country.name.common} className="country-flag" />
                        <p>{country.name.common}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const toggleNavbar = ()=>{

};