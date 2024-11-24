import { TodoItemProps } from "../Type";
import { TrashCan } from "./TrashCan";

export function TodoItem({
  todo,
  handleDeleteTodo,
  handleChecked,
}: TodoItemProps) {
  return (
    <div
      className={`flex justify-between items-center pt-1 ${
        todo.completed ? "line-through" : ""
      }`}
    >
      <div className="flex gap-2 items-center ">
        <input
          className="w-[16px] h-[16px]"
          onChange={() => handleChecked(todo.id)}
          type="checkbox"
        ></input>
        <span className="font-semibold">{todo.title}</span>
      </div>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="w-[30px] h-[30px]"
      >
        <TrashCan stroke="#ef4444" />
      </button>
    </div>
  );
}
