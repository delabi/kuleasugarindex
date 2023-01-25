import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LogRocket from 'logrocket';

LogRocket.init('kulea/sugarindex');

LogRocket.identify("123456",{
  name: "John Smith",
  email: "john.smith@gmail.com",
  age: 43,
  favoriteColor: "blue",
  currentSubscription: "professional-plan"
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals(console.log);

