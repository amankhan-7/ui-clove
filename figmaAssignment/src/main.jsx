import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Iphone } from "./screens/Iphone";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Iphone />
  </StrictMode>
);
