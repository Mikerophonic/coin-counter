import countCoins from './../src/js/coin.js';

describe('countCoins', () => {
  test('should return a value of 4 quarters for an input of 1', () => {
    const quarter = countCoins(2);
    expect(quarter).toEqual(8);
  });
});