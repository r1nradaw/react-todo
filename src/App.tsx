import { useState } from "react";
import { TodoItem } from "./components/TodoItem";
const todoList = [
  {
    id: 1,
    title: "item 1",
    completed: false,
  },
  {
    id: 2,
    title: "item 2",
    completed: false,
  },
];

function App() {
  const [todoListArray, setTodoListArray] = useState(todoList);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    let todoId = 1;
    if (todoInput.length > 0) {
      if (todoListArray.length > 0) {
        todoId = todoListArray[todoListArray.length - 1].id + 1;
      }
      setTodoListArray([
        ...todoListArray,
        {
          id: todoId,
          title: todoInput,
          completed: false,
        },
      ]);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    console.log(id);
    setTodoListArray(todoListArray.filter((item) => item.id != id));
  };

  const handleChecked = (id: number) => {
    console.log(id);
    setTodoListArray(
      todoListArray.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  console.log(todoListArray);

  return (
    <>
      <div className="h-screen w-screen">
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-[650px] border-2 border-gray-200 rounded-lg px-8 pb-10 pt-8 flex flex-col gap-2">
            <div className="flex justify-between items-baseline mb-5">
              <span className="text-2xl font-semibold">Todo List</span>
              {todoListArray.length > 0 && (
                <span className="text-lg font-medium">
                  {
                    todoListArray.filter((item) => item.completed === true)
                      .length
                  }
                  /{todoListArray.length}
                </span>
              )}
            </div>
            <div>
              <div className="flex gap-2 pb-1">
                <input
                  type="text"
                  className="w-full h-[50px] border-2 border-gray-200 rounded-lg pl-3"
                  value={todoInput}
                  onChange={(value) => {
                    console.log(value.target.value);
                    setTodoInput(value.target.value);
                  }}
                />
                <button
                  onClick={handleAddTodo}
                  className="bg-indigo-600 w-[80px] text-white rounded-md border-none font-medium"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="h-[10px]"></div>
            {todoListArray.map((todo, index) => (
              <div key={todo.id} className="flex flex-col gap-3">
                <TodoItem
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleChecked={handleChecked}
                />
                {index !== todoListArray.length - 1 && (
                  <div className="border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
