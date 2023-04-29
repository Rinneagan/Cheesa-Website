import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeWrapper from "./components/ThemeWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
);
