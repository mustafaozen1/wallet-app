import { Form } from "react-bootstrap";
const ExpenseForm = (props) => {
  return (
    <Form>
      <Form.Select onChange={props.aciklama}>
        <option value="" hidden>
          Kategori Seçiniz
        </option>
        <option value="Market Alışverişi">Market Alışverişi</option>
        <option value="Fatura">Fatura</option>
        <option value="Kira">Kira</option>
        <option value="Okul Ödemesi">Okul Ödemesi</option>
        <option value="Borç Ödemesi">Borç Ödemesi</option>
        <option value="Eğlence Gideri">Eğlence Gideri</option>
        <option value="Kıyafet Alışverişi">Kıyafet Alışverişi</option>
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
          placeholder="Para Girişi"
        />
      </Form.Group>
    </Form>
  );
};
export default ExpenseForm;
