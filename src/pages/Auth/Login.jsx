import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import { useHistory } from "react-router-dom"
import {useForm} from "react-hook-form";
import Card from '@material-ui/core/Card';
import * as controller from "../../controller"

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const NavLog = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 8rem;
`;

const Wrapper = styled(Card)`
  padding:1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:1rem;
`;

const GridForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 463px;
`;

const LoginForm = () => {
  const history = useHistory();
  const isImage = useMediaQuery({
    query: "(max-width: 1170px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 470px)",
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    try {
      const user = await controller.handleLogin(data.email,data.password);
      if(user.message){
        alert(user.message)
      } else {
        history.push("/")
      }
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <Wrapper style={isImage ? { marginTop: "6rem", marginBottom: "8rem" } : {}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GridForm>
          <GridItem style={isMobile ? { width: "300px" } : {}}>
            <h2>
              Email
            </h2>
            <div style={{height:"1rem"}}/>
            <Input type="email" id="email" {...register("email",{required:"This is required"})}/>
          </GridItem>
          <GridItem style={isMobile ? { width: "300px" } : {}}>
            <h2>
              Password
            </h2>
            <div style={{height:"1rem"}}/>
            <Input type="password" id="password" {...register("password",{required:"This is required"})}/>
          </GridItem>
        </GridForm>
        <div style={{height:"1rem"}}/>
        <div style={{height:"1rem"}}/>
        <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
    </Wrapper>
  );
};

const Login = () => {
  return (
    <LoginPage>
      <NavLog>
        <LoginForm /> 
      </NavLog>
    </LoginPage>
  );
};

export default Login;