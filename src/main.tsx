import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Counter from "./Counter.tsx"
import { Provider } from "react-redux"
import { store } from "./state/store.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>
)
