import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserContext>
      <h1>React with Context Api</h1>
      <Login />
      <Profile />
    </UserContext>
  );
}

export default App;
