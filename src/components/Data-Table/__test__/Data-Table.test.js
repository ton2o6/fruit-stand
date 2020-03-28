import React from "react";
import DataTable from './../Data-Table';

const salesMock = [
  {
    grapes: 105,
    watermelon: 36
  }
];

const monthMock = {
    year: 2020,
    month: 4,
    day: 12
  }

const titleMock = "Mock Title";

test('return the title', () => {
  const testLabel = <DataTable title={titleMock}/>;
  expect(testLabel.props.title).toBe('Mock Title')
})

test('return the ammount of watermelons. 36 is the value', () => {
  const testValue = <DataTable salesData={salesMock}/>
  expect(testValue.props.salesData[0].watermelon).toBe(36)
})

test('return watermelon and grapes', () => {
  const testFruits =  <DataTable salesData={salesMock}/>
  expect(testFruits.props.salesData.toString()).toContain({grapes: 105, watermelon: 36})
})

test('return an object', () => {
  const testObj =  <DataTable salesData={salesMock}/>
  const expectedObj = {grapes: 105, watermelon: 36};
  expect(testObj.props.salesData[0]).toMatchObject(expectedObj)
})

test('return a string date value', () => {
  const testMonth =  <DataTable salesData={monthMock}/>
  const {month, day, year} = testMonth.props.salesData;
  const date = `${month}/${day}/${year}`
  const expectDate = '4/12/2020';
  expect(date).toBe(expectDate)
})