import { toUpperCase } from '../app/Utils';

describe('Utils test suit', () => {
  it('should return uppercase of valid string', () => {
    //arrange:
    const sut = toUpperCase; // sut is system under test.
    const expected = 'ABC';

    //act:
    const actual = sut('abc');

    //assertion:
    expect(actual).toBe(expected);
  });
}); //multiple test is called as suit
