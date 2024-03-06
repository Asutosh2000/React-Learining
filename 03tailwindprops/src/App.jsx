import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    name: "Asutosh",
    age: 24,
  };
  const myArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">
        Tailwind test
      </h1>
      <Card name="Asutosh" btnText="Click Me" />
      <Card name="Hitesh" btnText="Visit Me" />
    </>
  );
}

export default App;
