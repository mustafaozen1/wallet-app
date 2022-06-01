import { Form } from "react-bootstrap";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  return (
    <Form>
      <Form.Select onChange={props.aciklama}>
        <option value="" hidden>Kategori Seçiniz</option>
        <option value="Market Alışverişi">Market Alışverişi</option>
        <option value="Fatura">Fatura</option>
        <option value="Kira">Kira</option>
        <option value="Yemek">Yemek</option>
      </Form.Select>

      <Form.Group
        required
        type="number"
        onChange={props.setMoney}
        className="mb-3"
      >
        <Form.Label>Para Miktarını Giriniz.</Form.Label>
        <Form.Control type="number" placeholder="Para Girişi" />
      </Form.Group>
    </Form>
  );
};
export default ExpenseForm;
