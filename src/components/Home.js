import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fetchData } from '../redux/covidData/covid';

function Home() {
  const covidReducer = useSelector((state) => state.covidReducer.covid);
  const dispatch = useDispatch();
  let Europe = covidReducer.filter((item) => item.continent === 'Europe');
  const loci = useLocation();
  const query = new URLSearchParams(loci.search);
  const buscar = query.get('buscar') || '';

  const navigate = useNavigate();
  Europe = Europe.filter((country) => country.country.includes(buscar.toLocaleUpperCase()));
  const [searchInput, setSearchInput] = useState(buscar);

  useEffect(() => {
    if (!covidReducer.length) {
      dispatch(fetchData());
    }
  }, []);

  const filterCountry = (e) => {
    navigate(e.target.value ? `?buscar=${e.target.value}` : '');
    setSearchInput(e.target.value);
  };
  return (
    <>
      <div className="heading">
        {' '}
        <h1>EUROPE COUNTRIES&#39; COVID-19 DATA</h1>
        {' '}
      </div>
      <div className="input-box">
        <input value={searchInput} onChange={filterCountry} className="input" type="text" placeholder="Serch European Country ..." />
      </div>
      <div className="body">
        {
        Europe.map((data) => {
          const {
            country,
            flag,
            todayCases,
          } = data;

          return (
            <Link key={country} to={{ pathname: `/country/${country}` }}>

              <div className="main-cont" key={country}>
                <div className="image">
                  <img className="img" src={flag} alt={country} />
                </div>
                <ul className="covid-d">
                  <li className="country">{country}</li>
                  <li>
                    Cases:
                    {todayCases}
                  </li>
                </ul>

              </div>
            </Link>

          );
        })
      }
      </div>
    </>

  );
}

export default Home;
