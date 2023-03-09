import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import { AuthProvider } from "./context/AuthProvider";
import { store } from "./reducers/store";

// eslint-disable-next-line
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
