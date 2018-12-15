import {isPythagoras} from "../src/segundo"
describe ("testing isPythagoras function", () => {
    test("catA=4, catB=3, hip=5", () => {
        expect(isPythagoras(4,3,5)).toEqual(true); 
    
    });
});
