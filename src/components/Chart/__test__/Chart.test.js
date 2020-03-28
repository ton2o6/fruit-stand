import React from 'react';
import Chart from './../Chart';

let mockLegend = 'top';
let mockTitle = 'Sale Date:';

let mockSales = [
  {
    id: 1,
    date: {
      year: 2020,
      month: 1,
      day: 7
    },
    bananas: 401,
    strawberries: 58,
    apples: 290,
    oranges: 191
  },
  {
    id: 2,
    date: {
      year: 2020,
      month: 2,
      day: 7
    },
    bananas: 354,
    strawberries: 98,
    apples: 132,
    oranges: 123
  }
];

test('return the title', () => {
  let chart = <Chart title={mockTitle}/>;
  expect(chart.props.title).toBe('Sale Date:');
})

test('return the legend position', () => {
  let chart = <Chart legendPosition={mockLegend}/>;
  expect(chart.props.legendPosition).toBe('top');
})

test('return an array of mock data', () => {
  let chart = <Chart monthSales={mockSales}/>;
  let testArray = [{
        id: 1,
        date: { year: 2020, month: 1, day: 7 },
        bananas: 401,
        strawberries: 58,
        apples: 290,
        oranges: 191
      },
      {
        id: 2,
        date: {
          year: 2020,
          month: 2,
          day: 7
        },
        bananas: 354,
        strawberries: 98,
        apples: 132,
        oranges: 123
      }];
  expect(chart.props.monthSales).toEqual(expect.arrayContaining(testArray))
})

test('return the amount of oranges in the first set of data. should be 191', () => {
  let chart = <Chart monthSales={mockSales}/>;
  expect(chart.props.monthSales[0].oranges).toBe(191)
})

