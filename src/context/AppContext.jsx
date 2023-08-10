import React, { createContext, useContext, useReducer } from "react";
import { nanoid } from "nanoid";

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: nanoid() }],
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {
          name: [],
          number: [],
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.path]: [
            ...state.errors[action.payload.path],
            action.payload.message,
          ],
        },
      };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const initialState = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    errors: {
      name: [],
      number: [],
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
