import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
type Todo = {
  name: string;
  done: boolean;
};
export default function Home() {
  const [data, setData] = useState<(number | string)[]>([3, 4, 5]);
  const [todos, setTodos] = useState<Todo[]>([
    // { name: "aaa", done: true },
    // { name: "bbb", done: false },
    // { name: "牛乳を買う", done: false },
  ]);
  const [text, setText] = useState("");
  const onClickAddText = () => {
    const newTodos = [...todos, { name: text, done: false }];
    setTodos(newTodos);
    setText("");
    console.log({ todos });
    console.log({ newTodos });
  };
  const onClickDeleteTodo = () => {};
  return (
    <div>
      <div>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={onClickAddText}>追加</button>

        <p>{text}</p>
        {/* <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      </div>
      <div className="todobox">
        {todos.map((todo) => (
          <div className="todoItem" key={todo.name}>
            <li>{todo.name}</li>
            <button onClick={onClickDeleteTodo}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}
