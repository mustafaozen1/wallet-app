import { Form } from "react-bootstrap";

const IncomeForm = (props) => {
  return (
    <div>
      <Form>
        <Form.Select onChange={props.aciklama}>
          <option value="" hidden>
            Kategori Seçiniz
          </option>
          <option value="Borsa Geliri">Borsa Geliri</option>
          <option value="Freelance">Freelance</option>
          <option value="Borç Alacağı">Borç Alacağı</option>
          <option value="Burs Ödeneği">Burs Ödeneği</option>
          <option value="Kira Geliri">Kira Geliri</option>
          <option value="Diğer">Diğer</option>
        </Form.Select>

        <Form.Group
          required
          type="number"
          onChange={props.setMoney}
          className="mb-3"
        >
          <Form.Control
            className="moneyInputForm"
            type="number"
            placeholder="Para Girişi Yapınız"
          />
        </Form.Group>
      </Form>
    </div>
  );
};
export default IncomeForm;
