import React from "react";
import DataTable from './../Data-Table';

const mockSales = [
  {
    grapes: 105,
    watermelon: 36
  }
];

const mockMonth = {
    year: 2020,
    month: 4,
    day: 12
  }

const mockTitle = "Mock Title";

test('return the title', () => {
  const testLabel = <DataTable title={mockTitle}/>;
  expect(testLabel.props.title).toBe('Mock Title')
})

test('return the ammount of watermelons. 36 is the value', () => {
  const testValue = <DataTable salesData={mockSales}/>
  expect(testValue.props.salesData[0].watermelon).toBe(36)
})

test('return watermelon and grapes', () => {
  const testFruits =  <DataTable salesData={mockSales}/>
  expect(testFruits.props.salesData.toString()).toContain({grapes: 105, watermelon: 36})
})

test('return an object', () => {
  const testObj =  <DataTable salesData={mockSales}/>
  const expectedObj = {grapes: 105, watermelon: 36};
  expect(testObj.props.salesData[0]).toMatchObject(expectedObj)
})

test('return a string date value', () => {
  const testMonth =  <DataTable salesData={mockMonth}/>
  const {month, day, year} = testMonth.props.salesData;
  const date = `${month}/${day}/${year}`
  const expectDate = '4/12/2020';
  expect(date).toBe(expectDate)
})