import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Button, Form } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Profile">
        <img id="ProfilePhoto" src={require("../img/user.png")} />
        <h2 className="ProfileName"></h2>
      </div>
      <Form className="loginForm">
        <Form.Group className="mb-3 loginFormInput" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Kullanıcı Adı" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 loginFormInput" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Şifre" />
        </Form.Group>
        <div className="formButtons">
          <Button
            className="button  loginButton"
            variant="primary"
            type="submit"
          >
            Giriş Yap
          </Button>
          <Button
            className="button registerButton"
            variant="primary"
            type="submit"
          >
            Kayıt Ol
          </Button>
        </div>
      </Form>
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
