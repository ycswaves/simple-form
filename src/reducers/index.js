import { combineReducers } from 'redux';
import { OTP_SUCCESS } from 'src/actions';

function otpStateReducer(state = false, action) {
  if (action.type === OTP_SUCCESS) return true;
  return state;
}

export const rootReducer = combineReducers({
  isOtpValid: otpStateReducer
})

