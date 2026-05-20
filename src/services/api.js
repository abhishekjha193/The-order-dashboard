import {
  orderDetails,
  breakdownData,
  customerDetails,
  timelineData,
  leftPanelData,
} from "../data/mockData";

export const getDashboardData = () => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        orderDetails,
        breakdownData,
        customerDetails,
        timelineData,
        leftPanelData,
      });

    }, 800);

  });

};

// Comment
// i created a lightweight service layer to separate data fetching logic from UI components and keep the architecture scalable.