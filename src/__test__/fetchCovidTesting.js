import fetchData from '../__mocks__/https';

const fetchCovidData = () => fetchData()
  .then((covid) => {
    const selectedData = [];
    covid.forEach((covid) => {
      selectedData.push({
        cases: covid.cases,
        country: covid.country,
        death: covid.deaths,

      });
    });
    return selectedData;
  });

export default fetchCovidData;
