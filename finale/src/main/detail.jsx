import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import '../styles/mapsButton.css';
import '../styles/detail.css';


export default function Detail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(function (response) {
        
        setCountry(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
        return null;
      })
      .finally(function () {
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>;

  
  const currencies = country.currencies ? 
    Object.values(country.currencies).map(currency => currency.name).join(', ') : 
    'N/A';
  
  const languages = country.languages ? 
    Object.values(country.languages).join(', ') : 
    'N/A';

  return (
    <>
      <div className="details">
        <Link to="/search" className="backtosearch-button">&lt; Back</Link>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={country.name.common} />
        <p>Capital: {country.capital?.[0]}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
        <p>Currency: {currencies}</p>
        <p>Languages: {languages}</p>
        <button className="maps-button">
          <p>Map with googlemaps: <a href={`https://www.google.com/maps/search/?api=1&query=${country.capital?.[0]}`}>{country.capital?.[0]}</a></p>
        </button>
      </div>
    </>
  );
}
