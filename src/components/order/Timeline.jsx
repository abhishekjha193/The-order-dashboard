import { timelineData } from "../../data/mockData";

function Timeline() {
  return (
    <div className="dashboard-card">

      <div className="card-header">

        <h2>Timeline</h2>

        <div className="card-icon green-icon">
          <i className="ri-time-line"></i>
        </div>

      </div>

      <div className="timeline">

        {timelineData.map((item, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <span>{item.time}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Timeline;