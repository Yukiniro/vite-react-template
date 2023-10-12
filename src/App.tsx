import { useState } from "react";
import { ReactComponent as LogoSvg } from "./icon/logo.svg";
import { ReactComponent as FaviconSvg } from "./icon/favicon.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-screen h-screen bg-gray-800 text-center flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold font-mono">React + Vite + daisyUI</h1>
      <label className="swap swap-flip p-14">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        <LogoSvg className="w-40 h-40 swap-on" />
        <FaviconSvg className="w-40 h-40 swap-off" />
      </label>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => setCount(count => count + 1)}
        >
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
