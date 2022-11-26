import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ProductButtons, ProductCard, ProductImage, ProducTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProducTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
