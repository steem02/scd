import { createRoot } from "react-dom/client";
import { Counter } from "./components/Couter";
import { App } from "./src/App";

const container = document.getElementById("root");

// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App/>);
