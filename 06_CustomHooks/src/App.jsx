import { useState } from 'react';
import InputBox from './componets/InputBox'

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyOptions = ["usd", "inr", "eur", "gbp"];

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-emerald-100 via-blue-100 to-indigo-200">
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/50 shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Converting ${amount} ${fromCurrency} to ${toCurrency}`);
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(e) => setAmount(e.target.value)}
            currencyOption={currencyOptions}
            selectCurrency={fromCurrency}
            onCurrencyChange={(e) => setFromCurrency(e.target.value)}
          />

          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              onClick={handleSwap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            >
              swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={""}
            amountDisable={true}
            currencyOption={currencyOptions}
            selectCurrency={toCurrency}
            onCurrencyChange={(e) => setToCurrency(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
