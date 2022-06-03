import { Form } from "react-bootstrap";
import React, { useState } from "react";

const IncomeForm = (props) => {
  return (
    <Form>
      <Form.Select onChange={props.aciklama}>
        <option value="" hidden>
          Kategori Seçiniz
        </option>
        <option value="Borsa Geliri">Borsa Geliri</option>
        <option value="İş">İş</option>
        <option value="Borç Alacağı">Borç Alacağı</option>
      </Form.Select>

      <Form.Group
        required
        type="number"
        onChange={props.setMoney}
        className="mb-3"
      >
        <Form.Control className="moneyInputForm" type="number" placeholder="Para Girişi Yapınız" />
      </Form.Group>
    </Form>
  );
};
export default IncomeForm;
