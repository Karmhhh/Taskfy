import { Typography, Grid, Button, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import MyBackgroundImage from "../Assets/bg.jpg";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface Props {
  note: string;
  date: string;
  Notes: string[];
  setNotes: React.Dispatch<React.SetStateAction<string[]>>;
}

const style = {
  border: "solid 0.5rem #5B6DCD",
  maxWidth: "20rem",
  borderRadius: "1rem",
  padding: "1rem",
  backgroundImage: `url(${MyBackgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const CardNote = ({ note, date, Notes, setNotes }: Props) => {
  return (
    <Box style={style}>
      <Button
        style={{ float: "right" }}
        onClick={() => {
          setNotes(Notes.filter((noteel) => noteel !== note));
        }}
      >
        {<HighlightOffIcon />}
      </Button>

      <Typography style={{ wordWrap: "break-word" }} variant="h6">
        {note}
      </Typography>

      <Typography textAlign={"right"} variant="body2">
        {date}
      </Typography>
    </Box>
 
  );
};
