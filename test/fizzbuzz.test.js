import { describe,expect,it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("FIZZBUZZ",() =>{
    it('should return sarabia if number provided is multiple of 11',()=>{
        expect(fizzbuzz(33)).toBe('sarabia')
    })
 
    it('should return alejandro if number provided is multiple of 2',()=>{
        expect(fizzbuzz(2)).toBe('alejandro')
    })
    it('should return suarez if number provided is multiple of 3',()=>{
        expect(fizzbuzz(9)).toBe('suarez')
        
    })
    
})