import { useReducer } from "react";

type inputStateType = {
  value: string;
  isTouched: boolean;
};

type actionType =
  | { type: "INPUT"; value: string }
  | { type: "BLUR" }
  | { type: "RESET" };

const initialInputState: inputStateType = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state: inputStateType, action: actionType) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
      break;
    case "BLUR":
      return { value: state.value, isTouched: true };
      break;
    case "RESET":
      return { value: "", isTouched: false };
  }
};

export const useInput = (validateValue: (value: string) => {}) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: any) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event: any) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    isError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
