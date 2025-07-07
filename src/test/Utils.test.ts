import { toUpperCase } from '../app/Utils';

describe('Utils test suit', () => {
  test('should return uppercase', () => {
    const result = toUpperCase('abc');

    expect(result).toBe('ABC'); //assertion
  });
}); //multiple test is called as suit
