import * as React from 'react';
import { StateContextProps } from './types';

const StateContext = React.createContext<StateContextProps | null>(null);

export { StateContext };
