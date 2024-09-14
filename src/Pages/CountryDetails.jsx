import { useLoaderData, useParams } from "react-router-dom";
import useCountryData from "../Hooks/useCountryData";


const CountryDetails = () => {
    const {nameId} =useParams()
    const [countries] =useCountryData()
    //const countries = useLoaderData
    console.log(countries);
    const countryArray = countries.filter((country)=> country.name.common===nameId)
    console.log (country);
    const [country] = countryArray
    console.log(country);
    const {name,flags,population} = country
    //const {name, flags, population} = useLoaderData

    return (
        <div>
            <h2>Country: {nameId}</h2>
            <h2>{name.common}</h2>
        </div>
    );
};

export default CountryDetails;