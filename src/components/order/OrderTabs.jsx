import { useState } from "react";

import { orderTabs } from "../../data/mockData";

function OrderTabs() {

  const [activeTab, setActiveTab] = useState("Detail");

  return (
    <div className="tabs-section">

      {orderTabs.map((tab, index) => (

        <div
          key={index}
          className={`tab ${
            activeTab === tab ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >

          {tab}

        </div>

      ))}

    </div>
  );
}

export default OrderTabs;