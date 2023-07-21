import React from "react";
import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { Input } from "./components/Input";
import { Todo } from "./Todo";
import { RenderTodos } from "./components/RenderTodos";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const light = createTheme({
  palette: {
    mode: 'light',
    
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    
  },
});

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
const [themee,setThemee] = useState<boolean>()
  return (
    <ThemeProvider theme={themee ? darkTheme : light}>
      <CssBaseline/>
    <Box className="App" >
      <Button style={{float:'right'}} onClick={()=>{setThemee(!themee)}}>{themee?<Brightness7Icon/>:<Brightness4Icon/>}</Button>
      <span className="heading">
        <Typography variant={"h3"}>Tasckfy</Typography>
      </span>

      <Input todo={text} setTodos={setText} handleAddTodo={handleAdd}></Input>

      <RenderTodos Todos={Todos} setTodos={setTodoss} />
    </Box>
    </ThemeProvider>
  );
};

export default App;
