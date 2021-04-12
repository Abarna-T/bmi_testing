import React from 'react';
import { shallow } from "enzyme";
import {getByTestId,screen, render, fireEvent} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom'
import Info from './Info'
describe("rendering info",()=>{
    it("info",()=>{
        render(<Info/>)
    })
    beforeEach(()=>{const wrap=render(<Info {...props} />)})
    it("BMI: {bmi}",()=>{
        const {getByText}=render(<Info/>)
        expect(getByText('BMI:')).toBeInTheDocument()
    })
})
let wrapper;
const props = {
    weight: "40",
    height: "176",
    id: "2",
    date: "4/9/2021",
    bmi: "16.14",
    deleteCard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<Info {...props} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("renders with props", () => {
    expect(wrapper.find("[data-test='bmi']").text()).toEqual("BMI: 16.14");

    expect(wrapper.find("[data-test='weight']").text()).toEqual(
      "Weight: 40 kg"
    );

    expect(wrapper.find("[data-test='height']").text()).toEqual(
      "Height: 176 cm"
    );

    expect(wrapper.find("[data-test='date']").text()).toEqual(
      "Date: 4/9/2021"
    );
  });

  it("should delete the card", () => {
    wrapper.find("button").simulate("click");

    expect(props.deleteCard).toHaveBeenCalledTimes(1);
  });
