import "./ExpanseItem.css";
import ExpanseDate from "./ExpanseDate.js"
import Card from '../UI/Card';
import React,{useState} from "react";



function ExpanseItem(props) {
   const [title,setTitle] =useState(props.title);

   const clickHandeler=()=>{
       setTitle('updated');
       console.log('updated');

   }
    return (
        <Card className='expense-item'>
            <ExpanseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandeler}></button>
        </Card>
    );
}

export default ExpanseItem;