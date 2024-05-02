// Services.js
import medical from '../assets/medical.png';
import school from '../assets/school.png';
import adult from '../assets/adult.png';
function Services() {
  return (
    <div className="services" id='services'>
      <h2>Our Services</h2>
      <div className="service medical">
        <img src={medical} alt="Medical Transportation" className="service-image" />
        <div className="service-content">
          <h3>Medical Transportation</h3>
          <p>Safe and reliable transportation for doctor appointments, dialysis, adult day care, and other medical needs. Our vehicles are equipped to ensure the comfort and safety of our passengers.</p>
          <a href='#contact'>
            <button className="cta-button">Contact Us</button>
          </a>
        </div>
        
      </div>
      <div className="service school">
        <img src={school} alt="Before and After School Services" className="service-image" />
        <div className="service-content">
          <h3>Before and After School Services</h3>
          <p>Transportation to and from school, ensuring children get to their destination safely. Our trained staff ensures a safe and secure journey for your children.</p>
          <a href='#contact'>
            <button className="cta-button">Contact Us</button>
          </a>
        </div>
      </div>
      <div className="service adult">
        <img src={adult} alt="Adult Day Care" className="service-image" />
        <div className="service-content">
          <h3>Adult Day Care</h3>
          <p>Transportation services for adults to and from day care facilities, ensuring their well-being. Our compassionate drivers provide assistance as needed, ensuring a comfortable journey.</p>
          <a href='#contact'>
            <button className="cta-button">Contact Us</button>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Services;
