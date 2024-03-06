function customRender(reactElement, container) {
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  //   element.setAttribute("href", reactElement.props.href);
  //   element.setAttribute("target", reactElement.props.target);
  //   for (const [key, value] of Object.entries(reactElement.props)) {
  //     console.log(key, value);
  //     element.setAttribute(key, value);
  //   }
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    element.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://vitejs.dev",
    target: "_blank",
  },
  children: "Go to Vite Documentation",
};

const mainComponent = document.getElementById("root");

customRender(reactElement, mainComponent);
