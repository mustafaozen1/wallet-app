import React from "react";
import ExpensesCards from "./ExpensesCards";

const History = (props) => {
  

  return (
    <div>
      <label>{props?.islemleriKaydet[0]?.IslemAciklama}</label>
      <label>{props?.islemleriKaydet[0]?.moneyInput}</label>
    </div>
  );
};
export default History;
