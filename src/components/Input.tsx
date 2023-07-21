import { Grid, TextField, Button } from "@mui/material";
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
      <Grid
        direction={"row"}
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
        container
      >
        <Grid item>
          <TextField
            id="TextFieldCss"
            InputProps={{
              style: {
                borderRadius: "30px",
              },
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
        <Grid item>
          <Button variant="outlined" type="submit">
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
