// Test Footer Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Footer
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
