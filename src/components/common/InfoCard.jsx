function InfoCard({ title, value }) {
  return (
    <div className="detail-card">

      <p>{title}</p>

      <h4>{value}</h4>

    </div>
  );
}

export default InfoCard;