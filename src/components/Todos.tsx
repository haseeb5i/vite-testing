import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoDetail({ id }: { id: number }) {
  const [todo, setTodo] = useState<Todo | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(({ data }) => setTodo(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!todo) {
    return <p>No todo found</p>;
  }

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
}
