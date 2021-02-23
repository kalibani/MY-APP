// Test Breadcrumb Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Breadcrumb
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
