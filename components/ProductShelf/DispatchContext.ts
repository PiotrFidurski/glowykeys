import * as React from 'react';
import { Action } from './types';

const DispatchContext = React.createContext<React.Dispatch<Action>>(null);

export { DispatchContext };
