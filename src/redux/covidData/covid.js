const covidDataurl = 'https://disease.sh/v3/covid-19/countries';
const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  covid: [],
};

const loadData = (covid) => ({
  type: FETCH_DATA,
  payload: covid,
});

const fetchingDataFailed = (err) => ({
  type: FETCH_DATA,
  payload: err,
});

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(covidDataurl);
    const data = await response.json();
    dispatch(
      loadData(
        data.map((covid) => {
          const {
            countryInfo: {
              _id: id,
              flag,
            },
            country, population,
            todayCases,
            todayDeaths,
            todayRecovered,
            cases,
            deaths,
            recovered,
            tests,
            continent,

          } = covid;

          return {
            country,
            population,
            todayCases,
            todayDeaths,
            todayRecovered,
            cases,
            deaths,
            recovered,
            tests,
            id,
            flag,
            continent,
          };
        }),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred, please try again later';
    dispatch(fetchingDataFailed(err.description));
  }
};

export const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state, covid: action.payload,
      };

    default:
      return state;
  }
};
