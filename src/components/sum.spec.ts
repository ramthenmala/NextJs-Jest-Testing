import { sum } from './sum'

it('Should return 7', () => {
    const a: number = 5
    expect(a).toBe(5)
    expect(sum(5, 2)).toBe(7);
})