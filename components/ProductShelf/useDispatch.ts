import * as React from 'react';
import { DispatchContext } from './DispatchContext';

const useDispatch = () => {
  const context = React.useContext(DispatchContext);

  if (!context) throw new Error('You are using DispatchContext outside of DispatchProvider');

  return context;
};

export { useDispatch };
