import React from "react";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Input } from "./components/Input";
import { Todo } from "./Todo";
import { RenderTodos } from "./components/RenderTodos";

import "./App.css";

const App: React.FC = () => {
  let [text, setText] = useState<string>("");

  let [Todos, setTodoss] = useState<Todo[]>([]);

  let handleAdd = (nameTodo: string) => {
    if (nameTodo) {
      let item: Todo = {
        id: Date.now(),
        nome: nameTodo,
        isCompleted: false,
      };

      setTodoss((prev) => [...prev, item]);
      setText("");
    }
  };

  return (
    <Box className="App">
      <span className="heading">
        <Typography variant={"h3"}>Tasckfy</Typography>
      </span>

      <Input todo={text} setTodos={setText} handleAddTodo={handleAdd}></Input>

      <RenderTodos Todos={Todos} setTodos={setTodoss} />
    </Box>
  );
};

export default App;
