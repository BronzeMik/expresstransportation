function PricingCard({ title, description, price }) {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">{price}</div>
    </div>
  );
}

export default PricingCard;
