import { util1, util2, util3 } from '../src/utils';

describe('Util test', () => {
  test('Sum', () => {
    const result = util1(1, 2);
    expect(result).toBe(3);
  });

  test('Multiply', () => {
    const result = util2(1, 2);
    expect(result).toBe(2);
  });
  test('Division', () => {
    const result = util3(2, 2);
    expect(result).toBe(1);
  });
});
