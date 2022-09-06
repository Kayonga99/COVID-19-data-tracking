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

  return (
    <div>

      <ul key={findCountry.country}>
        <p>
          Country:
          {findCountry.country}
        </p>
        <p>
          Population:
          { findCountry.population }
        </p>
        <p>
          Deaths:
          { findCountry.deaths }
        </p>
      </ul>
    </div>

  );
}

export default CountryData;
