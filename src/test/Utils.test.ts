import { getStringInfo, StringUtils, toUpperCase } from '../app/Utils';

describe('Utils test suit', () => {
  describe.only('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log('Setup');
    });

    afterEach(() => {
      //clearing mocks
      console.log('teardown');
    });

    it('Should return correct uppercase', () => {
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
      console.log('actual test');
    });
  });

  it('should return uppercase of valid string', () => {
    //arrange:
    const sut = toUpperCase; // sut is system under test.
    const expected = 'ABC';

    //act:
    const actual = sut('abc');

    //assertion:
    expect(actual).toBe(expected);
  });

  describe('toUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    test('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters.length).toBe(9);
      expect(actual.characters).toHaveLength(9);
    });

    test('return right lower case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string');
    });

    test('return right upper case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });

    test('return right characters', () => {
      const actual = getStringInfo('My-String');

      expect(actual.characters).toEqual([
        'M',
        'y',
        '-',
        'S',
        't',
        'r',
        'i',
        'n',
        'g',
      ]);
      expect(actual.characters).toContain<string>('M'); //passing generic type which helps to check string.
      expect(actual.characters).toEqual(
        expect.arrayContaining(['M', 'y', 'S', 't', 'r', 'i', 'n', 'g', '-'])
      );
    });

    test('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined(); //to check undefined and when we are not sure of the structure.

      expect(actual.extraInfo).not.toBe(undefined); //to check undefined and when we are not sure of the structure.
      expect(actual.extraInfo).not.toBeUndefined(); //to check undefined and when we are not sure of the structure.
      expect(actual.extraInfo).toBeTruthy(); //to check undefined and when we are not sure of the structure.
    });

    test('return right extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toEqual({}); //objects to be compared with toEqual
    });
  });
}); //multiple test is called as suit
