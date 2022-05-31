import React from "react";
import "./ExpenseForm.css";
import { useState,useEffect } from "react";
import useFirestore from "../../hooks/useFirestore";
import { timeStamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

const ExpenseForm = (props) => {
  const [val1, setenterTitle] = useState("");
  const [val2, setenterAmount] = useState("");
  const [val3, setenterDate] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const {addDocument, response} = useFirestore('transactions')
  const {user} = useAuthContext();
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmt: '',
  //     enteredDate: ''
  // })

  const onTChangeHandle = (e) => {
    setenterTitle(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: e.target.value}
    // })
  };

  const onAChangeHandler = (e) => {
    setenterAmount(e.target.value);
  };

  const onDChangeHandler = (e) => {
    setenterDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    addDocument({
      uid: user.uid,
      title: val1,
      amount: +val2,
      date: timeStamp.fromDate(new Date(val3))
    });
    setenterTitle("");
    setenterAmount("");
    setenterDate("");

    // props.onSaveData(expenseFormData);

  };
  useEffect(()=>{
    setenterTitle("");
    setenterAmount("");
    setenterDate("");
  },[response.success])

  const onClickHandler = () =>{
    setFormVisible(true)
  }
  const onCancelHandler = () =>{
    setFormVisible(false)
  }

  return (
    <div>     
      {!formVisible ? (
        <button onClick={onClickHandler}>Add New Expense </button>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={val1} onChange={onTChangeHandle} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="Number"
                value={val2}
                min="0.01"
                step="0.01"
                onChange={onAChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={val3}
                min="2020-01-01"
                max="2022-12-31"
                onChange={onDChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button type="submit">Submit</button>
              <button type="submit" onClick={onCancelHandler}>Cancel</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
