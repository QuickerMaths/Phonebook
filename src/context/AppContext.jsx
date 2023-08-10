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
      const action = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.path]: [...state.errors[action.path], action.message],
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

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
