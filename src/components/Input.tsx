import {
  Grid,
  TextField,
  Box,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRef } from "react";
interface Props {
  todo: string;
  setTodos: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (name: string) => void;
}
const style = {
  width: "50vw",
};
export const Input: React.FC<Props> = ({
  todo,
  setTodos,
  handleAddTodo,
}: Props) => {
  let inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todo);
        inputRef.current?.blur();
      }}
    >
      <Grid container style={{ margin: " auto 0" }} justifyContent={"center"}>
        <Grid item>
          {" "}
          <TextField
            id="TextFieldCss"
            InputProps={{
              style: {
                borderRadius: "30px",
              },
              endAdornment: (
                <IconButton type="submit" edge="end" color="primary">
                  <AddIcon />
                </IconButton>
              ),
            }}
            ref={inputRef}
            value={todo}
            sx={style}
            onChange={(typedText) => {
              setTodos(typedText.target.value);
            }}
            placeholder="Type Your Task Here"
          ></TextField>
        </Grid>
      </Grid>
    </form>
  );
};
