import { createActions} from 'redux-actions';

export const {loadWallet, setWallet} = createActions({
  loadWallet: (base_unit, quote_unit) => ({base_unit, quote_unit }),
  setWallet: (wallet) => ({ wallet}), 
  });
