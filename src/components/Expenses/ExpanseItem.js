import "./ExpanseItem.css";
import ExpanseDate from "./ExpanseDate.js"
import Card from '../UI/Card';



function ExpanseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpanseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpanseItem;