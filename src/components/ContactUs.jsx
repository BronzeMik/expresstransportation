function ContactUs() {
  return (
    <div className="contact-us" id='contact'>
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>For inquiries, you can reach us at:</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="63544a0e-9b88-41a6-b2a3-425805d70a6b" />
        <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="Transportation website" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
