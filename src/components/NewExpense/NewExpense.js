import React from 'react';

import ExpenseForm from './ExpenseForm';
import './newexp.css';

const NewExpense = (props) => {
    const saveExpDataHandle = (enteredData) =>{
        const expenseData = {
            ...enteredData,
            id: Math.random.toString()
        }
        // console.log(expenseData)
        props.onFormData(expenseData)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={saveExpDataHandle}/>
    </div>
  );
};

export default NewExpense;