import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const titleChangeHandler = (event) => {

    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {

    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFormVisible(false);
  };
  const onClickHandler = () => {
    setFormVisible(true);
  };
  const onCancelHandler = () => {
    setFormVisible(false);
  };
  return (
    <div>
      {!formVisible ? (
        <button onClick={onClickHandler}>Add New Expense </button>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                onChange={amountChangeHandler}
                min="0.01"
                step="0.01"
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
                min="2019-01-01"
                max="2022-12-31"
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="submit" onClick={onCancelHandler}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ExpenseForm;
