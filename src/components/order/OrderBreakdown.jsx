import Table from "../common/Table";

import { breakdownData, breakdownColumns } from "../../data/mockData";

function OrderBreakdown() {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>Order Breakdown Detail</h2>

        <div className="card-icon orange-icon">
          <i className="ri-box-3-line"></i>
        </div>
      </div>

      <Table columns={breakdownColumns} data={breakdownData} />
    </div>
  );
}

export default OrderBreakdown;
