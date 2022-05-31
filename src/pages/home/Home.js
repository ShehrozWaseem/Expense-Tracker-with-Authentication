import Expenses from "../../components/Expenses/Expenses";
// import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "../../components/NewExpense/NewExpense";
import { useState } from "react";
import classes from "./Home.module.css"
import useCollection from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

function Home() {
  const {user} = useAuthContext();
  const {documents,error} = useCollection('transactions',['uid','==',user.uid]);
  const [expenses,updateExpense] = useState('')

  const addedExpenseHandler = (expenseData) =>{
    
    // updateExpense([expenseData,...expenses])
    updateExpense((prevSnapShotExpense)=>{
      return [expenseData, ...prevSnapShotExpense];
    });

  };

  return (
    <div className={classes.container}>
    {error && <p>{error}</p>}
    {!documents && <h1 className={classes.loading}>Loading Data...</h1>}
    {documents && <NewExpense onFormData={addedExpenseHandler}/>}
    {documents && <Expenses items={documents} />} 
    </div>
  );
}

export default Home;
