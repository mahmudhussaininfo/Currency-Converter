import React, { useState } from "react";
import "./Converter.css";
import { exchangeRate } from "../api/PostApi";

const Converter = () => {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const res = await exchangeRate(fromCurr, toCurr, amount);
      const { conversion_result } = await res.data;
      setLoading(false);
      setConvertedAmount(conversion_result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto py-5">
            <div className="converter">
              <div className="heading">
                <h1>Currency Converter</h1>
              </div>

              <form>
                <div className="amount my-3">
                  <label>Amount:</label>
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="text"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="convert-final">
                  <div className="from d-flex gap-2 align-items-center">
                    <label>From:</label>
                    <select
                      value={fromCurr}
                      onChange={(e) => setFromCurr(e.target.value)}
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="INR">INR</option>
                      <option value="GBP">GBP</option>
                      <option value="AUD">AUD</option>
                      <option value="SAR">SAR</option>
                      <option value="DKK">DKK</option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                  <div className="to d-flex gap-2 align-items-center">
                    <label>To:</label>
                    <select
                      value={toCurr}
                      onChange={(e) => setToCurr(e.target.value)}
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="AUD">AUD</option>
                      <option value="BDT">BDT</option>
                      <option value="SAR">SAR</option>
                      <option value="DKK">DKK</option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                </div>

                <button
                  disabled={loading || amount <= 0}
                  className="btn btn-success mt-3 w-50"
                  type="submit"
                  onClick={handleConvert}
                >
                  {loading ? "converting..." : "convert"}
                </button>
              </form>
              <div className="converted-amount py-3">
                {convertedAmount ? (
                  <h4>
                    {" "}
                    {amount} {fromCurr} = {convertedAmount.toFixed(2)} {toCurr}
                  </h4>
                ) : (
                  " "
                )}
              </div>
            </div>
          </div>
          <div className="copyright text-center">
            <p>&copy; 2024 Currency Converter. All rights reserved Mahmud.</p>
            <a href="https://github.com/mahmudhussaininfo" target="_blank">
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Converter;
