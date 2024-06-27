import {add} from "../add"

test("Add function will do Addition of 2 numbers", ()=>{
    const result = add(2,4);

    //Assertion (if we dont write it will 100% pass)
    expect(result).toBe(6);

});