import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
import dlt_icon from '../../assets/delete.svg'
import useFirestore from "../../hooks/useFirestore";


function ExpenseItem(props) {
 
  const {remDocument,response} = useFirestore('transactions')
  return (

    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
        <img className="dlt" onClick={()=>remDocument(props.id)} src={dlt_icon} alt="remove"/>
      </div>
    </Card>
  );
}

export default ExpenseItem;
