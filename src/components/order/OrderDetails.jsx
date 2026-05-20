import InfoCard from "../common/InfoCard";

import { orderDetails } from "../../data/mockData";

function OrderDetails() {
  return (
    <div className="dashboard-card">

      <div className="card-header">

        <h2>Order Detail</h2>

        <div className="card-icon">
          <i className="ri-file-list-3-line"></i>
        </div>

      </div>

      <div className="details-grid">

        {orderDetails.map((item, index) => (

          <InfoCard
            key={index}
            title={item.title}
            value={item.value}
          />

        ))}

      </div>

    </div>
  );
}

export default OrderDetails;