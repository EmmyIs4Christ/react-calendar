import React, { useContext, useRef } from "react";
import styles from "./Auth.module.css";
import Context from "../store/Context";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Grid } from "@mui/material";

const Auth = () => {
  const navigate = useNavigate();
  const ctx = useContext(Context);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    ctx.setUser(inputRef.current.value);
    navigate("/calendar");
  };

  const handleChange = () => {};
  return (
    <div>
      <h2>Please enter your Name</h2>
      <form onSubmit={handleSubmit} className={styles.eventForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input ref={inputRef} type="text" required />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Auth;
