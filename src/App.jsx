import React from "react";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import styled from "styled-components";
function Auth(){
  // isme tu apna auth ka logic likh and return and false kar
}
function Welcome({name}){
  return <h1> Welcome {name}</h1>
}

function App(){
  const islogin=true;
  const Button=styled.button`
  background:blue;
  color:white;
  padding:10px;`
  return(
    <Button> click </Button>
  )
}

export default App;