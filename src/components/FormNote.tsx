import * as React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid, TextareaAutosize } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#c6e4f0",
  border: "0.3rem solid #5B6DCD",
  borderRadius: "3rem",
  boxShadow: 30,
  p: 5,
  lineHeight: 2,
  textAlign: "center",
  padding:'3rem'
};
interface Props {
  Notes: string[];
  SetNotes: React.Dispatch<React.SetStateAction<string[]>>;
  isOpen: boolean;
  handleClose: () => void;
}
export const FormNote = ({ Notes, SetNotes, isOpen, handleClose }: Props) => {
  const [textArea, setTextArea] = useState<string>("");
  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Grid item sx={style}>
          <form
            onSubmit={() => {
              isOpen = false;
            }}
          >
            <Typography variant="h6" component="h2">
              Type Your Note here.
            </Typography>
            <br></br>
            <TextareaAutosize
              value={textArea}
              minRows={5}
              style={{ width: "80%", 
              border: "0.3rem solid #5B6DCD", 
              borderRadius: "3rem" , padding:'1rem'}}
              onChange={(e) => {
                setTextArea(e.target.value);
              }}
            />
          </form>
          <Button
            onClick={() => {
              textArea&&
              SetNotes([...Notes, textArea]);
              setTextArea("");
              handleClose()
            }}
          >
            {" "}
            Add Note
          </Button>
        </Grid>
      </Modal>
    </>
  );
};
