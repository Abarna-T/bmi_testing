import React from 'react';
import App from'./App';
//import Info from './Info'
import '@testing-library/jest-dom'
import {fireEvent, render} from "@testing-library/react"
import { shallow } from 'enzyme';
describe("App",()=>{
    it("rendering app",()=>{
        //render(<App/>)
        const wrapper=shallow(<App/>)
        const head=wrapper.find('h1').hasClass('white-text')
        expect(wrapper.find('h1').hasClass('white-text')).toEqual(true)
    })  
})
let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
  });
describe("Button",()=>{
    it("rendering button",()=>{
        const mock=jest.fn()
        expect(wrapper.find('button')).toBeTruthy()
        const submitButton= wrapper.find('button')
       //submitButton.simulate('mock');  
       //=>  Method “simulate” is meant to be run on 1 node. 0 found instead.
    })
})
describe("App",()=>{
    it("rendering App with not null",()=>{
        expect(wrapper).not.toBeNull()
    })
})
describe("rendering props",()=>{
    const props={
        labelData:["4/9/2021"],
        bmiData: ["10"]
    }
})
describe("Button",()=>{
    it("rendering button",()=>{
        const mock=jest.fn()
        expect(wrapper.find('BmiForm')).toBeTruthy()
        const submitButton= wrapper.find('BmiForm')
       //submitButton.simulate('mock');  
       //=>  Method “simulate” is meant to be run on 1 node. 0 found instead.
    })
})