import { CardTodo } from "./CardTodo";
import { Todo } from "../Todo";
import { Stack, Grid, Divider, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { FormNote } from "./FormNote";
import { CardNote } from "./CardNote";
interface Props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const RenderTodos = ({ Todos, setTodos }: Props) => {
  var [open, setOpen] = useState<boolean>(false);
  const [Notes, setNotes] = useState<string[]>([]);
  const handleOpen: () => void = () => setOpen(true);
  const handleClose: () => void = () => setOpen(false);
  return (
    <>
      <Stack
        columnGap={2}
        justifyContent={"space-around"}
        alignItems={"flex-start"}
        divider={<Divider orientation="vertical" />}
        direction={"row"}
        padding={2}
      >
        <Divider />
        <Grid rowGap={2} alignItems={"center"} container direction={"column"}>
          <Typography variant="h5"> To Do Task</Typography>
          <Button
            onClick={() => {
              setTodos(Todos.map((e) => 
                e.isCompleted === false ? ({...e , isCompleted:true}) : e
              ))
            }}
          >
            <CheckCircleOutlineIcon />
          </Button>
          {Todos.map(
            (e) =>
              !e.isCompleted && (
                <CardTodo
                  key={e.id}
                  idTodo={e.id}
                  nomeTodo={e.nome}
                  isCompleted={e.isCompleted}
                  Todos={Todos}
                  setTodos={setTodos}
                ></CardTodo>
              )
          )}
        </Grid>

        <Grid rowGap={2} alignItems={"center"} container direction={"column"}>
          <Typography variant="h5"> Completed Task </Typography>
          <Button
            onClick={() => {
              setTodos(Todos.filter((e) => e.isCompleted === false));
            }}
          >
            <HighlightOffIcon />
          </Button>
          {Todos.map(
            (e) =>
              e.isCompleted && (
                <CardTodo
                  key={e.id}
                  idTodo={e.id}
                  nomeTodo={e.nome}
                  isCompleted={e.isCompleted}
                  Todos={Todos}
                  setTodos={setTodos}
                ></CardTodo>
              )
          )}
        </Grid>

        <Grid rowGap={2} alignItems={"center"} container direction={"column"}>
          <Typography variant="h5"> Note </Typography>

          <Button
            onClick={() => {
              handleOpen();
            }}
          >
            <AddIcon />
          </Button>
          <FormNote
            Notes={Notes}
            SetNotes={setNotes}
            isOpen={open}
            handleClose={handleClose}
          />
          {Notes.map((note) => (
            <CardNote
              key={note}
              note={note}
              date={new Date(Date.now()).toString()}
              Notes={Notes}
              setNotes={setNotes}
            />
          ))}
        </Grid>
      </Stack>
    </>
  );
};
