import {useState} from 'react';
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [enteredTitle,setEnteredTiltle] = useState('')
    const titleChangeHandler=(event)=>{
        // console.log(event.target.value)
        setEnteredTiltle(event.target.value);
    }
    const [enteredAmount,setEneterdAmount]= useState('')    
    const amountChangeHandler=(event)=>{
        setEneterdAmount(event.target.value);
    }
    const [enteredDate,setEnteredDate]= useState('')
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }    
        
    
    return (
        <div>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label className="new-expense__control label">Title</label>
                        <input className="new-expense__control input"type="text" onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label className="new-expense__control label" >Amount</label>
                        <input className="new-expense__control input"type="number" min="0.01" step="0.01"onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label className="new-expense__control label">Date</label>
                        <input className="new-expense__control input"type="date" min="01-01-2019" max="31-12-2022"onChange={dateChangeHandler}/>
                    </div>
                    <button className="new-expense__actions">Submit Form</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm