import { Form } from "react-bootstrap";
import React, { useState } from 'react'

const IncomeForm=(props)=> {
  return (
    <Form>
      <Form.Select  onChange={props.aciklama}>
        <option value="" selected disabled>Kategori Seçiniz</option>
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
        <Form.Label>Para Miktarını Giriniz.</Form.Label>
        <Form.Control  type="number" placeholder="Para Girişi" />
      </Form.Group>
    </Form>
  );

}
export default IncomeForm;