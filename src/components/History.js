import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./History.css";
import { addDays, toDate } from "date-fns";
import dayjs from "dayjs";

const History = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const handleFrom = (event) => {
    setFrom(event.target.value);
  };
  const handleTo = (event) => {
    setTo(event.target.value);
  };

  //İŞLEM FİTRELEME
  const [filteredCategory, setFilteredCategory] = useState("");
  const searchCategory = (event) => {
    setFilteredCategory(event.target.value);
  };

  let categoryFilter = props.islemleriKaydet.filter((islemleriKaydet) => {
    return islemleriKaydet.IslemAciklama.indexOf(filteredCategory) !== -1;
  });

  return (
    <div className="History">
      <div className="filters">
        <Form.Group
          required
          type="number"
          onChange={searchCategory}
          className="mb-3 categoryFilter"
        >
          <Form.Control type="text" placeholder="Kategori Arama" />
        </Form.Group>
        <label className="filterText">Hangi Tarihten</label>
        <div className="dateInputs">
          <label htmlFor="startDate"></label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            onChange={handleFrom}
          />
        </div>
        <label className="filterText">Hangi Tarihe</label>
        <div className="dateInputs">
          <label htmlFor="endDate"></label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            onChange={handleTo}
          />
        </div>
      </div>
      <div className="cardsGeneral">
        {categoryFilter.reverse().map((islem, index) => (
          <Card
            key={index}
            {...(islem.colorType
              ? { className: "cardHistoryGreen buttonHistory" }
              : { className: "cardHistoryRed buttonHistory " })}
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
