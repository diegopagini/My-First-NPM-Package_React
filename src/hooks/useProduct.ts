/** @format */
import { useEffect, useRef, useState } from 'react';

import { InitialValues, OnChangeArgs, Product } from '../interfaces/product.interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount)
      newValue = Math.min(newValue, initialValues.maxCount);

    setCounter(newValue);

    onChange &&
      onChange({
        count: newValue,
        product,
      });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
    isMounted.current = true;
  }, [value]);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    reset,
  };
};
