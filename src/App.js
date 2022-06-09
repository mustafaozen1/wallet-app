import { useState } from "react";

import "./App.css";
import Money from "./components/Money";
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

  return (
    <div className="App">
      <div className="Money">
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
