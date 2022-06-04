import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Button, Form } from "react-bootstrap";
import "./Users";
import { Users } from "./Users";
import uniqid from "uniqid";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Sidebar() {
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
    if (
      userNameInput === "MustafaOzen"
      
    ) {
      if (passwordInput === "12345"){
        setLoginState(false);
      } else {
        alert("Girdiğiniz Şifre Hatalıdır.")
      }
    } else {
      alert("Girdiğiniz Kullanıcı Adı Hatalı")
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
      <div className="Profile">
        <img id="ProfilePhoto" src={require("../img/user.png")} />
        <h2 className="ProfileName"></h2>
      </div>
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
          <button 
          className="button logoutButton"
          onClick={LogoutClick}>Çıkış Yap</button>
        </Form>
      ) : null}

      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div>{" "}
              <div id="tittle">{val.tittle}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
