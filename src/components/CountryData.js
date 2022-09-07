import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/covidData/covid';

function CountryData() {
  const covidReducer = useSelector((state) => state.covidReducer.covid);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = covidReducer.find((country) => country.country === name);
  useEffect(() => {
    if (!covidReducer.length) {
      dispatch(fetchData());
    }
  }, []);
  const {
    todayCases,
    todayDeaths,
    todayRecovered,
    country,
    tests,
    deaths,
    flag,
    population,
  } = findCountry;
  return (
    <div className="data">
      <div className="data-flag">
        <img src={flag} alt="#" />
        <h2>
          Country:
          {country}
        </h2>
      </div>
      <ul className="list" key={findCountry.country}>
        <li>
          <p>
            Population:
            { population }
          </p>
          <p>
            People Tested Today :
            { tests }
          </p>
          <p>
            New Cases:
            { todayCases }
          </p>
          <p>
            Deaths:
            { deaths }
          </p>
          <p>
            Dead Today:
            { todayDeaths }
          </p>
          <p>
            People Recovered Today:
            { todayRecovered }
          </p>

        </li>

      </ul>
    </div>

  );
}

export default CountryData;
