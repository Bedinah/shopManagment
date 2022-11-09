import React, { useState, useEffect } from "react";
import { Container, Grid, Card, TextField, Stack } from "@mui/material";
import "./home.css";
import LoadingButton from "@mui/lab/LoadingButton";
import Logo from "../assets/images/logoimg.webp";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";

const styles = { width: "100%", height: "100vh", background: "yellow" };
const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, isFetching } = useSelector((state) => state?.auth);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const login = () => {
    loginAction({ email, password })(dispatch);
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoadingButton
                  loading={isFetching}
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    // navigate("/dashboard");
                    console.log({ email, password });
                    login();
                  }}
                >
                  SIGN-IN
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
