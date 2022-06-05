import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { income, expense, clear, incomeByAmount } from './balanceSlice'

const Balance = () => {

  const balance = useSelector((state) => state.balanceCounter.balance)
  const icome = useSelector((state) => state.balanceCounter.income)
  const expense1 = useSelector((state) => state.balanceCounter.expense1)
  const dispatch = useDispatch()

  const [AddAmount, setAddAmount] = useState()

  const [data,setdata]=useState()

  const addValue = Number(AddAmount) || 0;


 

  const clearAll = () => {
    setAddAmount()
    dispatch(clear())
  }

  return (
    <div className='fs-4'>
      <p>
       Your Balance RS : {balance}
      </p>

      <div>
        <h4>Income</h4>
        <p className="money plus">{icome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money plus">{expense1}</p>
      </div>

      <div className="input-group mb-3 d-grid gap-1  mx-10">
        <input type="number" className="form-control w-100 shadow-sm p-2 mb-2 bg-body rounded"
          value={AddAmount}
          onChange={(e) => setAddAmount(e.target.value)}
          placeholder="Enter Your Balance value"
        />
      </div>



      <div className='d-flex justify-content-evenly'>

        {/* <button className='btn btn-success' onClick={ ()=> dispatch(incomeByAmount(addValue , setAddAmount('')) )}>Add Balance</button> */}
        <button className='btn btn-success' onClick={() => dispatch(income(addValue, setAddAmount('')))}>Income</button>
        <button className='btn btn-danger' onClick={() => dispatch(expense(addValue, setAddAmount('')))}>Expense</button>
        <button className="btn btn-primary" onClick={() => clearAll()}>Clear Your Balance</button>
      </div>



    </div>
  )
}

export default Balance