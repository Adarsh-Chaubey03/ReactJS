import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "green", "yellow", "black", "blue", "purple", "pink"];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 px-4 flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-2xl shadow-lg">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: c }}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
