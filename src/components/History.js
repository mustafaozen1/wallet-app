import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./History.css"

export default class History extends Component {
  render() {
    return (
      <div className="History">
        {this.props.islemleriKaydet.map((islem) => (
          <Card className="cardProcess">
            <Card.Body className="cardCategory">{islem.IslemAciklama}</Card.Body>
            <Card.Body className="cardMoney">{islem.moneyInput}</Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
