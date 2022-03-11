import { add } from './calculator';

describe('calculator', () => {
  it('adds up three numbers', () => {
    expect(add([1, 3, 1])).toEqual(5);
  });
});
