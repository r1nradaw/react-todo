export type TodoItemProps = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  handleDeleteTodo: (id: number) => void;
  handleChecked: (id: number) => void;
};
