import next from "next";
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
    // const newTodos = [...todos, { name: text, done: false }];

    const newTodos: Todo[] = [];

    for (const todo of todos) {
      newTodos.push(todo);
    }
    newTodos.push({ name: text, done: false });

    setTodos(newTodos);
    setText("");
    console.log({ todos });
    console.log({ newTodos });
  };

  // const sum = (a: number, b: number) => {
  //   console.log("a:", a, "b:", b, "res: ", a + b);
  // };
  // sum(3, 10);

  const onClickDeleteTodo = (name: string) => {
    // setTodos(todos.filter((todo) => todo.name !== name));

    const newTodos: Todo[] = [];

    for (const todo of todos) {
      console.log("todo: ", todo);
      if (todo.name !== name) {
        newTodos.push(todo);
      }
    }
    console.log("newTodos: ", newTodos);

    setTodos(newTodos);
  };

  // let abc = "abc";
  // console.log(abc);

  return (
    <div>
      <div>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={onClickAddText}>追加</button>
        {/* <button
          onClick={() => {
            abc = "abcd";
            console.log(abc);
            setText(text + "a");
          }}
        >
          button
        </button> */}
        {/* <p>{text}</p> */}
      </div>
      <div className="todobox">
        {todos.map((todo) => (
          <div className="todoItem" key={todo.name}>
            <li>{todo.name}</li>
            <button onClick={() => onClickDeleteTodo(todo.name)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}
