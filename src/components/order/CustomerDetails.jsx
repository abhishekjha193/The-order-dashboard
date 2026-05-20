import InfoCard from "../common/InfoCard";
import { customerDetails } from "../../data/mockData";

function CustomerDetails() {
  return (
    <div className="dashboard-card">

      <div className="card-header">

        <h2>Customer Detail</h2>

        <div className="card-icon purple-icon">
          <i className="ri-user-3-line"></i>
        </div>

      </div>

      <div className="details-grid">

        {customerDetails.map((item, index) => (

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

export default CustomerDetails;