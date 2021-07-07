import React from 'react';
import ReactDOM from 'react-dom';
import Add from './Add';
import * as rtl from '@testing-library/react';
// import 'jest-dom/extend-expect';
describe('add function', () => {
    it('sums two integers', () => {
      const expected = 3;
      const actual = Add(1, 2);
      expect(actual).toBe(expected); // .toBe() looks for strict equality!
    });
  }); 