const ContactSection = () => {
    return (
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions, suggestions or complains? We’d love to hear from you.
          </p>
  
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required className="input" />
            <input type="email" placeholder="Your Email" required className="input" />
            <textarea placeholder="Your Message" required className="textarea" rows="5"></textarea>
            <button type="submit" className="button button-green">
              Send Message
            </button>
          </form>
  
          <div className="contact-details">
            <p><strong>Email:</strong> support@farmart.com</p>
            <p><strong>Phone:</strong> +254 712 345678</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  