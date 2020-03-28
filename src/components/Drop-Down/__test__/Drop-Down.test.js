import React from 'react';
import DropDown from './../Drop-Down';

let mockState = {
  showToggle: false
}

const mockData = ['button1', 'button2', 'button3', 'button4'];

test('return label', () => {
  let selectDate = <DropDown label="Select Date"/>;
  expect(selectDate.props.label).toBe('Select Date')
})

test('return a boolean', () => {
  let dropdown = <DropDown showToggle={mockState}/>;
  expect(dropdown.props.showToggle.showToggle).toBeFalsy();
})

test('return last second button in an array', () => {
  let dropdown = <DropDown dropDown={mockData}/>;
  expect(dropdown.props.dropDown[1]).toBe('button2')
})

test('return an array of buttons', () => {
  let dropdown = <DropDown dropDown={mockData}/>;
  let expectedArray = ['button1', 'button2', 'button3'];
  expect(dropdown.props.dropDown).toEqual(expect.arrayContaining(expectedArray))
})
