import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store/store";
import App from "./app/app";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider
      messages={{
        ...require("./app/locale/es"),
      }}
      locale="en"
    >
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
