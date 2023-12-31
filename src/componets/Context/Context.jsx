import { createContext, useReducer } from "react";
export const Cartcontext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const filterAdd = state.filter((item) => action.payload.id === item.id);
        if (filterAdd.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);

  const info = { state, dispatch };
  return <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>;
};
