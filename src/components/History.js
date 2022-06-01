
import React, { Component} from "react";
import { Card, Form } from "react-bootstrap";
import "./History.css";

const History=(props)=> {
    console.log("Hello World")
    return (
      <div className="History">
        <div className="filters">
          <label className="textFilter">Filtrele</label>
          <Form.Select className="categoryFilter">
            <option>Kategori</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select className="historyFilter">
            <option>Tarih</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        {props.islemleriKaydet.map((islem, index) => (
          <Card key={index}
          className={props.cardColor===true? ("cardHistoryGreen"):("cardHistoryRed")}>
            <Card.Header className="cardDate">{islem.date}</Card.Header>
            <Card.Text className="cardCategory">
              {islem.IslemAciklama}
            </Card.Text>
            <Card.Text className="cardMoney">{islem.processType}{islem.moneyInput}TL</Card.Text>
            
          </Card>
        ))}
      </div>
    );
  
}
export default History;