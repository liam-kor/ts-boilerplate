import { util1, util2 } from '../src/utils';

describe('Util test', () => {
  test('Sum', () => {
    const result = util1(1, 2);
    expect(result).toBe(3);
  });

  test('Multiply', () => {
    const result = util2(1, 2);
    expect(result).toBe(2);
  });
});
