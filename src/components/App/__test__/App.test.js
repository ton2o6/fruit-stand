import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';

test('return an object props property', () => {
  const app = <App/>;
  const props = {props: {}}
  expect(app).toMatchObject(props);
})
