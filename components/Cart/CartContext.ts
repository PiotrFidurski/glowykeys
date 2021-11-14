import * as React from 'react';

interface CartContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = React.createContext<CartContextProps | null>(null);

export { CartContext };
