import { Typography, Box, Stack, Button, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MyBackgroundImage from "../Assets/bg.jpg";
import { Todo } from "../Todo";
import React, { useState } from "react";
const style = {
  padding: "1rem",
  color: "#000000",
  maxWidth: "20rem",
  border: "#5B6DCD solid 0.5rem",
  borderRadius: "1rem",
  backgroundImage: `url(${MyBackgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
var color:string;

interface Props {
  idTodo: number;
  nomeTodo: string;
  isCompleted: boolean;
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const handleDelete = (
  todoDel: number,
  Todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  setTodos(Todos.filter((el) => el.id !== todoDel));
};
const editTodo = (
  idTodo: number,
  Todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  isEdit:boolean,
  setIsEdit:React.Dispatch<React.SetStateAction<boolean>>,
  newValue:string,
  setNewValue:React.Dispatch<React.SetStateAction<string>>,
  isCompleted:boolean,
) => {
  setIsEdit(!isEdit)
  newValue&& 
  setTodos(
    Todos.map((el)=>
      el.id === idTodo ? {...el,nome:newValue}: el ))

};
const toggleTodo = (
  todoToggle: number,
  Todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  setTodos(
    Todos.map((el) =>
      el.id === todoToggle ? { ...el, isCompleted: !el.isCompleted } : el
    )
  );
};

export const CardTodo = ({
  idTodo,
  nomeTodo,
  isCompleted,
  Todos,
  setTodos,
}: Props) => {
  const [isEdit, setIsEdit]=useState<boolean>(false)
  const [newValue,setNewValue]=useState<string>(nomeTodo)
  return (
    <Box style={style} textAlign={"center"}>
      <Typography style={{ wordWrap: "break-word" }} variant="h6">
        {isEdit? <TextField onChange={(e)=>{setNewValue(e.target.value)}}/>:nomeTodo}
      </Typography>
      <Typography variant="body1" style={{color:color}}>
        {isCompleted ? (color = 'green',"Complete") : (color = 'red',"Not Done")}
      </Typography>
      <Stack direction={"row"} justifyContent={"center"}>
        <Button>
          <ClearIcon
            color="action"
            onClick={() => {
              handleDelete(idTodo, Todos, setTodos);
            }}
          />
        </Button>
        <Button>
          <BorderColorIcon
            color="action"
            onClick={() => {
              editTodo(idTodo, Todos, setTodos,isEdit,setIsEdit,newValue,setNewValue,isCompleted);
            }}
          />
        </Button>
        <Button>
          <CheckCircleOutlineIcon
            color="action"
            onClick={() => {
              toggleTodo(idTodo, Todos, setTodos);
            }}
          />
        </Button>
      </Stack>
    </Box>
  );
};
