import PricingCard from './PricingCard';


function PricingCardList() {
  return (
    <div className="pricing-card-list" id='pricing'>
      <h2>Our Pricing</h2>
      <div className="pricing-cards">
        <PricingCard
          title="Short Distance"
          description="Less than 5 miles"
          price="Starting at $20"
        />
        <PricingCard
          title="Long Distance"
          description="5 miles or more"
          price="Starting at $30"
        />
        <PricingCard
          title="Recurring Rides"
          description="Weekly or Monthly Contracts"
          price="Starting at $100/week"
        />
      </div>
    </div>
  );
}

export default PricingCardList;
