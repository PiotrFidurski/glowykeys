import { theme } from '@styled/theme';

export const customStyles = {
  content: {
    padding: 0,
    margin: 0,
    background: theme.background.secondary,
    border: 0,
  },
  overlay: {
    zIndex: 100000,
    background: theme.background.modalOverlay,
  },
};
