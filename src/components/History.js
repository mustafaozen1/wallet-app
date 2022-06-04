import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./History.css";

const History = (props) => {
  
  /*
  
  let filtered = islemleriKaydet.filter(
    (islemleriKaydet) => {
      return islemleriKaydet.IslemAciklama.indexOf(filteredCategory) !== -1
    }
  ) */ 


  
  //İŞLEM FİTRELEME 
  const [filteredCategory, setFilteredCategory] = useState("")
  const searchMovie = (event) => {
    setFilteredCategory(event.target.value)
  };

  let categoryFilter = props.islemleriKaydet.filter(
    (islemleriKaydet) => {
      return islemleriKaydet.IslemAciklama.indexOf(filteredCategory) !== -1
    }
  )

  return (
    <div className="History">
      <div className="filters">
        <label className="textFilter">Filtrele</label>
        <Form.Group
          required
          type="number"
          onChange={searchMovie}
          className="mb-3"
        >
          <Form.Control
            className="historyFilter"
            type="text"
            placeholder="Kategori Arama"
          />
        </Form.Group>
        <Form.Group
          required
          type="number"
          onChange={props.setMoney}
          className="mb-3"
        >
          <Form.Control
            className="catrgoryFilter"
            type="text"
            placeholder="Para Girişi Yapınız"
          />
        </Form.Group>
      </div>
      <div className="cardsGeneral">
        {categoryFilter.map((islem, index) => (
          <Card
            key={index}
            {...(islem.colorType
              ? { className: "cardHistoryGreen" }
              : { className: "cardHistoryRed" })}
          >
            <Card.Header className="cardDate">{islem.date}</Card.Header>
            <Card.Text className="cardCategory">
              {islem.IslemAciklama}
            </Card.Text>
            <Card.Text className="cardMoney">
              {islem.processType}
              {islem.moneyInput}TL
            </Card.Text>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default History;
