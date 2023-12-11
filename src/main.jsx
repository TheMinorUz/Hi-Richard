import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FaTrash } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { GiExpense } from "react-icons/gi";

import "./index.css";

const inputTitle = <input type="text" id="title" placeholder="enter title" />;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="title-section">
      <h1>hi, richard</h1>
      <p>
        Welcome back to your <a href="#">memory manager</a>
      </p>
    </div>
    <div className="mainValues">
      <div className="balance">
        <MdOutlineAccountBalanceWallet className="balance-icon" />
        <div className="values">
          <p>your balance</p>
          <p>${0}</p>
        </div>
      </div>
      <div className="incomes">
        <TbReportMoney className="income-icon" />
        <div className="values">
          <p>your incomes</p>
          <p>${0}</p>
        </div>
      </div>
      <div className="expense">
        <GiExpense className="expense-icon" />
        <div className="values">
          <p>your expense</p>
          <p>${0}</p>
        </div>
      </div>
    </div>
    <div className="inputs-outputs">
      <div className="inputs">
        <h1>add transition</h1>
        <label htmlFor="title">
          <p>TITLE</p>
          {inputTitle}
        </label>
        <label htmlFor="amount">
          <p>AMOUNT</p>
          <input type="text" id="amount" placeholder="enter value" />
        </label>
        <label htmlFor="type">
          <br />
          <p>TYPE</p>
          <select name="" id="type">
            <option value="">income</option>
            <option value="">expend</option>
          </select>
        </label>
        <br />
        <button type="submit"> add</button>
      </div>
      <div className="history-section">
        <h1>history</h1>
        <div className="history">
          <div className="nav">
            <p>title</p>
            <p>amount</p>
            <p>type</p>
          </div>
          <div className="card">
            <p>{"bank"}</p>
            <p>${10000}</p>
            <p>expend</p>
            <FaTrash className="trashIcon" />
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
