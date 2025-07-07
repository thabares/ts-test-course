import { getStringInfo, toUpperCase } from '../app/Utils';

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

  it.only('Should return info for a valid string', () => {
    const actual = getStringInfo('My-String');

    expect(actual.lowerCase).toBe('my-string');
    expect(actual.upperCase).toBe('my-string');
    expect(actual.extraInfo).toEqual({}); //objects to be compared with toEqual

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

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

    expect(actual.extraInfo).not.toBe(undefined); //to check undefined and when we are not sure of the structure.
    expect(actual.extraInfo).not.toBeUndefined(); //to check undefined and when we are not sure of the structure.
    expect(actual.extraInfo).toBeDefined(); //to check undefined and when we are not sure of the structure.
    expect(actual.extraInfo).toBeTruthy(); //to check undefined and when we are not sure of the structure.
  });
}); //multiple test is called as suit
