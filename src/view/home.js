import React from "react";
import { Container, Grid, Card, TextField, Stack, Button } from "@mui/material";
import "./home.css";
import Logo from "../assets/images/logoimg.webp";
import { useNavigate } from "react-router-dom";

const styles = { width: "100%", height: "100vh", background: "yellow" };
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container sx={styles}>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={0}></Grid>
          <Grid item sm={6} xs={12}>
            <Card className="signinContainer">
              <Stack spacing={2} alignItems="center" justifyContent="center">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "30%", height: "20vh" }}
                />
                <label>ORDER YOUR PRODUCT</label>
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                />
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  SIGN-IN
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
