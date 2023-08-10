import React, { createContext, useContext, useReducer, useEffect } from "react";
import { nanoid } from "nanoid";

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      const isContactExist = state.contacts.some(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (isContactExist) {
        alert(`${action.payload.name} is already in contacts`);
        return state;
      }

      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: nanoid() }],
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
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
    contacts: localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [],
    filter: "",
    errors: {
      name: [],
      number: [],
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
