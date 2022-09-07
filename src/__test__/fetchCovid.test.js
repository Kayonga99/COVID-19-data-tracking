import '@testing-library/jest-dom/extend-expect';
import fetchData from '../__mocks__/https';
import fetchCovidData from './fetchCovidTesting';

describe('test fetching countries', () => {
  it('test fetching country name', async () => {
    await fetchCovidData().then((data) => {
      expect(data[0].country).toBe('Afghanistan');
    });
  });
  it('test fetching country name', async () => {
    await fetchCovidData().then((data) => {
      expect(data[1].country).toBe('Albania');
    });
  });
  it('test fetch deaths', async () => {
    await fetchData().then((data) => {
      expect(data[0].deaths).toBe(3049);
    });
  });
  it('test fetch covid cases', async () => {
    await fetchData().then((data) => {
      expect(data[0].cases).toBe(157015);
    });
  });
});
