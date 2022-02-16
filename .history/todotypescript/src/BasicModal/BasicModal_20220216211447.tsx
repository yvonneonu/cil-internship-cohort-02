import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ setTodos, todos }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [openBack, setOpenBack] = React.useState(false);

  const submitInfor = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    setOpenBack(!openBack);

    console.log(Title);
    console.log(Description);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: Title,
        body: Description,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTodos([...todos, { body: Description, title: Title }].reverse());
        setOpenBack(false);
        handleClose();
        console.log(json);
      })
      .catch((err) => {
        setOpenBack(false);
        handleClose();
        console.log("error" + err.message);
      });
  };

  return (
    <div>
      <Button size="large" variant="contained" onClick={handleOpen}>
        Add todo
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="modal-modal-title"
            name="title"
            label="Title"
            variant="standard"
          />
          <TextareaAutosize
            onChange={(e) => setDescription(e.target.value)}
            id="modal-modal-description"
            name="description"
            fullWidth
            aria-label="minimum height"
            minRows={3}
            placeholder="Describe your Todo"
            style={{ width: "100%", marginTop: "15px", padding: "5px" }}
          />
     <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: "8px",
            }}
          >
            <Button onClick={submitInfor} size="medium" variant="contained">
              Add todo
            </Button>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openBack}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
        </Box>

      </Modal>
    </div>
  );
}