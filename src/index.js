import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import Context from "./Components/Stores/contextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>
);
