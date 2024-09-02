import { createContext, useContext } from 'react';

// Default context value for type safety and fallback
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Complete the react useContext course",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

//export { TodoContext, TodoProvider, useTodo };