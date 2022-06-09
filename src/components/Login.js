import React, { useState } from "react";
import "./Login.css"

import { Button, Form } from "react-bootstrap";
import "./Users";
import { Users } from "./Users";
import uniqid from "uniqid";

function Login() {
  //Kullanıcı Adını Alma
  const [userNameInput, setUserNameInput] = useState("");
  const setUserName = (event) => {
    setUserNameInput(event.target.value);
  };
  //Şifreyi Alma
  const [passwordInput, setPasswordInput] = useState("");
  const setPassword = (event) => {
    setPasswordInput(event.target.value);
  };

  //Login Buton Fonksiyonu
  const [loginState, setLoginState] = useState(true);
  const LoginClick = () => {
    if (userNameInput === "MustafaOzen") {
      if (passwordInput === "12345") {
        setLoginState(false);
      } else {
        alert("Girdiğiniz Şifre Hatalıdır.");
      }
    } else {
      alert("Girdiğiniz Kullanıcı Adı Hatalı");
    }
  };
  const LogoutClick = () => {
    setLoginState(true);
  };
  //Kullanıcı Adını Listeye Ekleme
  const [user, setUser] = useState(userNameInput.value, passwordInput.value);

  const addUser = () => {
    const newUser = {
      id: uniqid(),
      userName: userNameInput,
      password: passwordInput,
    };
    console.log(newUser);
  };

  return (
    <div className="Sidebar">
      {loginState ? (
        <Form className="loginForm">
          <Form.Group onChange={setUserName} className="mb-3 loginFormInput">
            <Form.Control required type="text" placeholder="Kullanıcı Adı" />
          </Form.Group>
          <Form.Group
            onChange={setPassword}
            className="mb-3 loginFormInput"
            controlId="formBasicPassword"
          >
            <Form.Control type="password" placeholder="Şifre" />
          </Form.Group>
          <div className="formButtons">
            <Button
              onClick={LoginClick}
              className="button  loginButton"
              variant="primary"
            >
              Giriş Yap
            </Button>
            <Button
              //onClick={addUser}
              className="button registerButton"
              variant="primary"
            >
              Kayıt Ol
            </Button>
          </div>
        </Form>
      ) : null}
      {!loginState ? (
        <Form className="loginSidebar">
          <label className="userNameText">{userNameInput}</label>
          <button className="button logoutButton" onClick={LogoutClick}>
            Çıkış Yap
          </button>
        </Form>
      ) : null}
    </div>
  );
}

export default Login;
