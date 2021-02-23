// Test Loader Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Loader
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
