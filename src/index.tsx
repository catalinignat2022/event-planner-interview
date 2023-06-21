import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { ServiceFactory } from "./services/service.factory";
import { ServiceFactoryContext } from "./services/service-factory-context";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#4F71DF"
  }
});

const getPage = () => {
  return (
      <Route path="/" element={<App />}></Route>
  )
}

const serviceFactory = new ServiceFactory();
ReactDOM.render(
    <React.StrictMode>
      <ServiceFactoryContext.Provider value={serviceFactory}>
        <BrowserRouter>
          <Routes>
            { getPage() }
          </Routes>
        </BrowserRouter>
      </ServiceFactoryContext.Provider>
    </React.StrictMode>
  ,
  document.getElementById("root")
);

reportWebVitals();