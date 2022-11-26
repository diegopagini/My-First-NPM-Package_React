# DP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Diego Pagini

## Ejemplo

```typescript
import {
  ProductCard,
  ProductImage,
  ProducTitle,
  ProductButtons,
} from 'dp-product-card';
```

```tsx
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
```
