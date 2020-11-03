import React from "react";
import TodoManager from "./components/TodoManager";
import TodoContextProvider from "./context/providers/todoProvider";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoManager />
      </TodoContextProvider>
    </div>
  );
}

export default App;
