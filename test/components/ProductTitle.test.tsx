import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from '../../src/components/ProductCard';
import { ProducTitle } from '../../src/components/ProductTitle';
import { PRODUCT } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProducTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT}>{() => <ProducTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
