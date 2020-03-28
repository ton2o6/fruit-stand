import React from 'react';
import DropDown from './../Drop-Down';

const mockState = {
  showToggle: false
}

const mockData = ['button1', 'button2', 'button3', 'button4'];

test('return label', () => {
  const selectDate = <DropDown label="Select Date"/>;
  expect(selectDate.props.label).toBe('Select Date')
})

test('return a boolean', () => {
  const dropdown = <DropDown showToggle={mockState}/>;
  expect(dropdown.props.showToggle.showToggle).toBeFalsy();
})

test('return last second button in an array', () => {
  const dropdown = <DropDown dropDown={mockData}/>;
  expect(dropdown.props.dropDown[1]).toBe('button2')
})

test('return an array of buttons', () => {
  const dropdown = <DropDown dropDown={mockData}/>;
  const expectedArray = ['button1', 'button2', 'button3'];
  expect(dropdown.props.dropDown).toEqual(expect.arrayContaining(expectedArray))
})

