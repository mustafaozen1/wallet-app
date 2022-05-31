import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import "./Money.css";

const Money = (props) => {
  //Para girişi
  const [moneyInput, setMoneyInput] = useState(0);
  const setMoney = (event) => {
    setMoneyInput(event.target.value);
  };

  const [IslemAciklama, setIslemAciklama] = useState("");
  const aciklama = (event) => {
    setIslemAciklama(event.target.value);
  };

  ////////////////////////////////////////////////////////
  // const islemler=[]
  // const [islemleriKaydet,setIslemeriKaydet]=useState(islemler);
  //////////////////////
  //İşlem türü girişi
  const [Process, setProcess] = useState("");
  const processSave = (event) => {
    setProcess(event.target.value);
  };

  const increaseMoney = () => {
    props.setBalance(props.balance + parseInt(moneyInput));
    setIncShow(false);
    props.setIslemeriKaydet([
      ...props.islemleriKaydet,
      { moneyInput, IslemAciklama },
    ]);
  };
  const decreaseMoney = () => {
    if (props.balance - parseInt(moneyInput) >= 0) {
      props.setBalance(props.balance - parseInt(moneyInput));
    }
    setDecShow(false);
  };

  const [decreaseShow, setDecShow] = useState(false);
  const [increaseShow, setIncShow] = useState(false);
  const CloseDec = () => setDecShow(false);
  const CloseInc = () => setIncShow(false);
  const decShow = () => setDecShow(true);
  const incShow = () => setIncShow(true);

  return (
    <div className="moneyAll">
      <div className="moneyBottom">
        <div className="balanceCss">Bakiye = {props.balance}</div>
        <div className="Buttons">
          <button className="button" variant="primary" onClick={incShow}>
            Bakiye Arttır
          </button>
          <button className="button" variant="primary" onClick={decShow}>
            Bakiye Azalt
          </button>
        </div>
      </div>
      <div>
        <Modal show={increaseShow} onHide={CloseInc}>
          <Modal.Header closeButton>
            <Modal.Title>Bakiye Arttır</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <IncomeForm
              setMoney={setMoney}
              IslemAciklama={IslemAciklama}
              setIslemAciklama={setIslemAciklama}
              aciklama={aciklama}
            ></IncomeForm>
          </Modal.Body>
          <Modal.Footer>
            <button className="button" variant="primary" onClick={CloseInc}>
              Kapat
            </button>
            <button
              className="button"
              variant="primary"
              onClick={increaseMoney}
            >
              Bakiye Arttır
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={decreaseShow} onHide={CloseDec}>
          <Modal.Header closeButton>
            <Modal.Title>Bakiye Azalt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExpenseForm setMoney={setMoney}></ExpenseForm>
          </Modal.Body>
          <Modal.Footer>
            <button className="button" variant="primary" onClick={CloseDec}>
              Kapat
            </button>
            <button
              className="button"
              variant="primary"
              onClick={decreaseMoney}
            >
              Bakiye Azalt
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Money;
