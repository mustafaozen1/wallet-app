import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./App.css";
import Money from "./components/Money";
import Sidebar from "./components/Sidebar";
import History from "./components/History";

function App() {
  //History cards color
  const [cardColor, setCardColor] = useState();
  //bakiye
  const [balance, setBalance] = useState(0);
  const activityList = [];
  const [activities, setActivities] = useState(activityList);

  const islemler = [];
  const [islemleriKaydet, setIslemeriKaydet] = useState(islemler);
  console.log(islemleriKaydet);
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Money">
        <div className="PieCharts">
          <PieChart
            className="Income"
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />

          <PieChart
            className="Expense"
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </div>

        <Money
          cardColor={cardColor}
          setCardColor={setCardColor}
          balance={balance}
          setBalance={setBalance}
          activities={activities}
          setActivities={setActivities}
          islemleriKaydet={islemleriKaydet}
          setIslemeriKaydet={setIslemeriKaydet}

        />
      </div>
      <History
        cardColor={cardColor}
        setCardColor={setCardColor}
        islemleriKaydet={islemleriKaydet}
      ></History>
    </div>
  );
}

export default App;
