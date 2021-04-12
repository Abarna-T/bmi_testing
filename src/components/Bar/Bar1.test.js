import React from "react";
import { shallow } from 'enzyme';
import {getByRole, render,screen} from '@testing-library/react'
import Bar from "./Bar";
describe("bar",()=>{
    it("rendering",()=>{
        shallow(<Bar />);
        //render(<Bar/>)  =>  TypeError: Cannot read property 'config' of undefined
    })
})
describe("rendering props",()=>{
    const props={
        labelData:["4/9/2021"],
        bmiData: ["10"]
    }
})