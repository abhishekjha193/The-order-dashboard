import OrderSummary from "../components/order/OrderSummary";
import OrderTabs from "../components/order/OrderTabs";
import OrderDetails from "../components/order/OrderDetails";
import OrderBreakdown from "../components/order/OrderBreakdown";
import CustomerDetails from "../components/order/CustomerDetails";
import Timeline from "../components/order/Timeline";
import { leftPanelData } from "../data/mockData";
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

      </div>

      <div className="main-dashboard">

        <OrderSummary />

        <OrderTabs />

        <OrderDetails />

        <OrderBreakdown />

        <CustomerDetails />

        <Timeline />

      </div>

    </div>
  );
}

export default Dashboard;