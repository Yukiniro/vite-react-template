import { useState } from "react";
import Style from "./App.module.less";
import { ReactComponent as LogoSvg } from "./icon/logo.svg";
import { ReactComponent as FaviconSvg } from "./icon/favicon.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={Style.app}>
      <h1 className={Style.title}>Thank to use vite-react-template</h1>
      <div>
        <LogoSvg />
        <FaviconSvg />
      </div>
      <p>
        <button
          type="button"
          className={Style.button}
          onClick={() => setCount(count => count + 1)}
        >
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
