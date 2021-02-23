// Test Input Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Input
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
