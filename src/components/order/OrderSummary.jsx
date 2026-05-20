import StatusBadge from "../common/StatusBadge";

import { orderSummaryData } from "../../data/mockData";

function OrderSummary() {

  const {
    breadcrumb,
    orderId,
    status,
  } = orderSummaryData;

  return (
    <div className="summary-section">

      <div className="summary-left">

        <div className="breadcrumb">
          {breadcrumb}
        </div>

        <div className="summary-title">

          <h1>{orderId}</h1>

          <StatusBadge status={status} />

        </div>

      </div>

      <div className="summary-actions">

        <i className="ri-printer-line"></i>

        <i className="ri-refresh-line"></i>

        <button>Status</button>

        <button>Action +</button>

      </div>

    </div>
  );
}

export default OrderSummary;