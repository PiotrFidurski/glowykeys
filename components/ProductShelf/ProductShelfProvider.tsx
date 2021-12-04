import { ProductsSection } from '@styled/pages/SharedStyles';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { DispatchContext } from './DispatchContext';
import { initialState } from './initialState';
import { reducer } from './reducer';
import { StateContext } from './StateContext';
import { Props } from './types';

function ProductShelfProvider({ products, children }: Props) {
  const { push, query, pathname } = useRouter();

  const [state, dispatch] = React.useReducer(reducer, { ...initialState({ query, products }) });

  React.useEffect(() => {
    push({ pathname, query: { ...state.activeFilters } }, undefined, {
      scroll: false,
      shallow: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeFilters]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <ProductsSection aria-labelledby="products-section" role="region">
          <VisuallyHiddenH2 id="products-section">Products section</VisuallyHiddenH2>
          <AnimateSharedLayout>{children}</AnimateSharedLayout>
        </ProductsSection>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default ProductShelfProvider;
