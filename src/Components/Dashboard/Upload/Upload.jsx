import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

export default function Upload() {
  const [file, setFile] = useState(null);

  const changeHandler = (e) => {
    let file = e.target.files[0];

    if (file) {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ paddingBottom: "10px" }}
    >
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={changeHandler}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      {file && <ProgressBar file={file} setFile={setFile} />}
    </Stack>
  );
}
