import React from 'react';
import {getByTestId,screen, render, fireEvent} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom'
//import BmiForm1 from './BmiForm';
import BmiForm from './BmiForm';
describe('Rendering without crash',()=>{
    it('BmiForm',()=>{
        render(<BmiForm/>)
    })
})
describe('rendering Label',()=>{
    it('label',()=>{
        const {getByLabelText}=render(<BmiForm/>)
        const demo=getByLabelText("Weight (in kg)")
        expect(demo).toBeInTheDocument()
    })
    it('label',()=>{
        const {getByLabelText}=render(<BmiForm/>)
        const demo=getByLabelText("Height (in cm)")
        expect(demo).toBeInTheDocument()
    })
    it('label value-height',()=>{
        const {getByLabelText}=render(<BmiForm/>)
        const demo=getByLabelText("Height (in cm)")
        const value="150"
        fireEvent.change(demo,{target:{value:value}})
        expect(demo.value).toEqual(value);
    })
    it('label value-weigth',()=>{
        const {getByLabelText}=render(<BmiForm/>)
        const demo=getByLabelText("Weight (in kg)")
        const value="50"
        fireEvent.change(demo,{target:{value:value}})
        expect(demo.value).toEqual(value);
    })
})
