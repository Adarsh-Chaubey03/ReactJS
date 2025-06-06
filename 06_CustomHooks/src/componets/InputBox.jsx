import React from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOption = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="bg-white/20 backdrop-blur-sm w-full mb-4 rounded-lg p-3 flex justify-between items-end">
      <div className="w-1/2">
        <label className="text-black/60 block mb-1">{label}</label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5 border-b-2 border-gray-300"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={onAmountChange}
        />
      </div>
      <div className="w-1/2 text-right">
        <p className="text-black/40 mb-2">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={onCurrencyChange}
          disabled={currencyDisable}
        >
          {currencyOption.map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
