import React from 'react';
import "./App.css"
import Balance from '../src/store/IncomeExpense/Balance'

function App() {

  return (
    <div className='container .bg-light fst-italic '>
      <h1>EXPENSE TRACKER</h1>
      <Balance/>
    </div>
  );
}

export default App;
