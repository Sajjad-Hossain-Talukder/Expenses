import { createContext, useReducer } from "react";

import { DUMMY_EXPENSES } from "../data/dummy-data";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  removeExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      const obj = { ...action.payload, id: id };
      return [obj, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const index = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateAbleExpense = state[index];
      const updatedItem = { ...updateAbleExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[index] = updatedItem;
      return updatedExpense;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function removeExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
