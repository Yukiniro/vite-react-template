import { useState, ChangeEventHandler } from "react";
import LogoSvg from "./icon/logo.svg?react";
import FaviconSvg from "./icon/favicon.svg?react";

function App() {
  const [count, setCount] = useState(0);

  const handleSwapHandle: ChangeEventHandler<HTMLInputElement> = e => {
    const checked = e.target.checked;
    const themeDom = document.querySelector("[data-theme]");
    themeDom.setAttribute("data-theme", checked ? "dark" : "light");
  };

  return (
    <div className="w-screen h-screen bg-base-100 text-center flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold font-mono">React + Vite + daisyUI</h1>
      <label className="swap swap-flip p-14">
        <input
          type="checkbox"
          onChange={handleSwapHandle}
          data-toggle-theme="dark,light"
        />
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
