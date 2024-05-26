import React from "react";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

const Action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={onClick}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClick}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );    