// Test Dashboard Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Dashboard
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
