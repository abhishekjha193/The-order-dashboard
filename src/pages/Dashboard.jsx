import OrderSummary from "../components/order/OrderSummary";
import OrderTabs from "../components/order/OrderTabs";
import OrderDetails from "../components/order/OrderDetails";
import OrderBreakdown from "../components/order/OrderBreakdown";
import CustomerDetails from "../components/order/CustomerDetails";
import { leftPanelData, activityTimelineData } from "../data/mockData";
import StatusBadge from "../components/common/StatusBadge";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="left-panel">
        <div className="left-top">
          {leftPanelData.map((item, index) => (
            <div className="order-box" key={index}>
              <p>{item.title}</p>

              <h4>{item.value}</h4>
            </div>
          ))}

          <div className="order-box">
            <p>Status</p>

            <StatusBadge status="Process" />
          </div>
        </div>
        <div className="left-timeline">
          {activityTimelineData.map((item) => (
            <div className="left-timeline-item" key={item.id}>
              <div className="timeline-icon">
                <i className="ri-file-list-3-line"></i>
              </div>

              <div className="timeline-info">
                <h5>
                  {item.status} <span>|{item.code}</span>
                </h5>

                <p>{item.title}</p>

                <small>
                  {item.date} | {item.time}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="main-dashboard">
        <OrderSummary />

        <OrderTabs />

        <OrderDetails />

        <OrderBreakdown />

        <CustomerDetails />

      </div>
    </div>
  );
}

export default Dashboard;


