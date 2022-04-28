import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { RateActionCreators } from '../store/reducers/rate/action-creators';

const allActionsCreators = {
  ...AuthActionCreators,
  ...RateActionCreators,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionsCreators, dispatch);
};
