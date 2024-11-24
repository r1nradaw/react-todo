import trashcan from "./assets/trashcan.svg";
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
  {
    id: 3,
    title: "item 3",
    completed: false,
  },
];

function App() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-[300px] w-[600px] border-2 border-gray-200 rounded-lg p-10 flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-2xl font-bold">Todo List</span>
            <span className="text-2xl font-bold">3/4</span>
          </div>
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                className="w-full h-[50px] border-2 border-gray-200 rounded-lg"
              />
              <button className="bg-indigo-600 w-[80px] text-white rounded-md border-none">
                Add
              </button>
            </div>
          </div>
          {todoList.map((todo, index) => (
            <>
              <TodoItem todo={todo} />
              {index !== todoList.length - 1 && (
                <div className="border-b border-gray-200"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

type TodoItemProps = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <input type="checkbox"></input>
        <span>{todo.title}</span>
      </div>
      <button className="w-[25px] h-[25px]">
        <img src={trashcan} alt="trashcan" />
      </button>
    </div>
  );
}
