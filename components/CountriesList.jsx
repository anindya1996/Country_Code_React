import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountryListShimmer from "./CountryListShimmer.jsx";
const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  const URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  console.log(countriesData);

  if (!countriesData.length) {
    return <CountryListShimmer />;
  }

  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter(
            (country) =>
              country?.name?.common?.toLowerCase().includes(query) ||
              country?.region?.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country?.name?.common}
                name={country?.name?.common}
                flag={country?.flags?.svg}
                population={country?.population}
                region={country?.region}
                capital={country?.capital?.join(", ")}
                data={country}
              />
            );
          })}
      </div>
    </>
  );
};

export default CountriesList;
