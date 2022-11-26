import React from 'react';
import renderer from 'react-test-renderer';

import { ProductButtons } from '../../src/components/ProductButtons';
import { ProductCard } from '../../src/components/ProductCard';
import { PRODUCT } from '../data/products';

describe('ProductButtons', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(<ProductButtons />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT}>{() => <ProductButtons />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
