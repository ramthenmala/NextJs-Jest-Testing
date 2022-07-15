import { sum } from './sum';

describe('Sum testing', ()=> {
    it('should return 7', ()=> {
        const a: number = 7;
        expect(sum(5, 2)).toBe(a)
    })
})