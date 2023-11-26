import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState({
    loanAmount: 50000,
    annualInterest: 1,
    loanTerm: 1,
  });

  const [mortagePayment, setMortagePayment] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: +e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCaluclatePayment = () => {
    let i = data.annualInterest / 1200;
    let n = data.loanTerm * 12;
    setMortagePayment((data.loanAmount * i) / (1 - 1 / Math.pow(1 + i, n)));
  };
  let totalPayment;
  let totalInterest;

  if (mortagePayment) {
    totalPayment = mortagePayment * data.loanTerm * 12;
    totalInterest = totalPayment - data.loanAmount;
  }

  return (
    <div className="App">
      <h1>Mortage Payment</h1>
      <div className="input_form">
        <form onSubmit={handleSubmit}>
          <label>
            Loan amount ($) :{' '}
            <input
              type="text"
              name="loanAmount"
              onChange={handleChange}
              defaultValue="50000"
              min="100"
              required
            />
          </label>
          <br />
          <label>
            Annual interest rate (%) :
            <input
              type="text"
              name="annualInterest"
              onChange={handleChange}
              defaultValue="1"
              min="0.5"
              required
            />
          </label>
          <br />
          <label>
            Loan term (in years) :
            <input
              type="text"
              name="loanTerm"
              onChange={handleChange}
              defaultValue="1"
              min="1"
              required
            />
          </label>
          <br />
          <br />
          <button onClick={handleCaluclatePayment}>Caluclate </button>
        </form>
      </div>

      <div className="payment_info">
        <span>
          {' '}
          Monthly Mortage Payment :
          <strong> $ {mortagePayment ? mortagePayment.toFixed(2) : 0}</strong>
        </span>
        <span>
          {' '}
          Total Payment :
          <strong> $ {totalPayment ? totalPayment.toFixed(2) : 0}</strong>
        </span>
        <span>
          {' '}
          Total Interest :
          <strong> $ {totalInterest ? totalInterest.toFixed(2) : 0}</strong>
        </span>
      </div>
    </div>
  );
}
