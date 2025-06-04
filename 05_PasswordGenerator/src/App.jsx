import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center px-4  text-white">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-orange-400">
          Password Generator
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-3 py-2 rounded-l-md text-cyan-300"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition "
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label>Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label>Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label>Include Special Characters</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
