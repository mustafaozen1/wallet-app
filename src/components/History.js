
import { Card, Form } from "react-bootstrap";
import "./History.css";

const History = (props) => {
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
      <div className="cardsGeneral">
        {props.islemleriKaydet.map((islem, index) => (
          <Card key={index} className={"cardHistory"}>
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
