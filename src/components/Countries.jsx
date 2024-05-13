import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";


const Countries = () => {
      const [countries, setCountries] = useState([]);

      useEffect(()=>{
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data =>{
                  // console.log(data)
                  setCountries(data)
            })
      }, [])
      return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                 {
                  countries.map((country, idx )=> <Country
                  key={idx}
                  country={country}
                  ></Country>)
                 } 
            </div>
      );
};

export default Countries;