import React from 'react';
import { TodoList } from './features/TodoList';

function App() {
  // Hardcode a userId for demo
  const userId = 'user123';

  return (
    <div>
      <h1>My gRPC Todo App</h1>
      <TodoList userId={userId} />
    </div>
  );
}

export default App;
