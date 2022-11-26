import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { PRODUCT } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la imagen', () => {
    const wrapper = renderer.create(<ProductImage img={PRODUCT.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={PRODUCT}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
