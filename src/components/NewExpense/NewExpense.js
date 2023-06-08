import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpenses, setAddNewExpenses] = useState(false);
  const addHandler = () => {
    setAddNewExpenses(true);
  };

  const cancelHandler = () => {
    setAddNewExpenses(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpenses(false);
  };
  return (
    <div className="new-expense">
      {!addNewExpenses && <button onClick={addHandler}>Add New Expense</button>}
      {addNewExpenses && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
