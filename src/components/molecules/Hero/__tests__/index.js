// Test Hero Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Hero
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
