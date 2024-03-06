import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {[
            "red",
            "green",
            "blue",
            "olive",
            "gray",
            "yellow",
            "pink",
            "purple",
            "lavender",
            "white",
            "black",
          ].map((item) => (
            <button
              onClick={() => setColor(item)}
              className={`outline-none px-4 py-1 rounded-full ${
                item === "white" || (item === "yellow") | (item === "lavender")
                  ? "text-black"
                  : "text-white"
              } shadow-lg`}
              style={{ backgroundColor: item }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
