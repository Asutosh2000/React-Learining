import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// This won't work because react use different method to create element
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://vitejs.dev",
//     target: "_blank",
//   },
//   children: "Go to Vite Documentation",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = " | user logged in";

const reactElement = React.createElement(
  "a", // element
  {
    href: "http://google.com",
    target: "_blank",
  }, // attributes
  "click me to visit google", // inner text
  anotherUser // evaluated expression - for injecting variables
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  reactElement
);
