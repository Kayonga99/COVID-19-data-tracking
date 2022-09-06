/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../redux/covidData/covid';

function Home() {
  const covidReducer = useSelector((state) => state.covidReducer.covid);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!covidReducer.length) {
      dispatch(fetchData());
    }
  }, []);
  const Europe = covidReducer.filter((item) => item.continent === 'Europe')
  return (
    <div className='body'>
      
        {
        Europe.map((data) => {
          const {
            country,
            flag,
          } = data;

          return (
            <Link key={country} to={{pathname: `/country/${country}`}}>


            <div className="main-cont" key={country}>
              {country}
              <img src={flag} alt={country} />

            </div>
            </Link>

          );
        })
      }
    </div>

  );
}

export default Home;
