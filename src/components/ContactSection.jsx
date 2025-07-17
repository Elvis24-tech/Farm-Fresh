import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setMessage('');

    emailjs
      .sendForm(
        'service_ili2gqn',     
        'template_fcam8bq',    
        form.current,
        'upGLNWzucnIH6y9pT'  
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setMessage('❌ Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center">
          Have questions, suggestions or complaints? We’d love to hear from you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="grid grid-2">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="input"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="input"
            />
          </div>
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="input"
          ></textarea>

          <button type="submit" className="button button-green" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {message && (
            <p
              style={{
                marginTop: '1rem',
                color: message.includes('successfully') ? 'green' : 'red',
              }}
            >
              {message}
            </p>
          )}
        </form>

        <div className="contact-details text-center" style={{ marginTop: '3rem' }}>
          <p><strong>Email:</strong> support@farmart.com</p>
          <p><strong>Phone:</strong> +254 712 345678</p>
          <p><strong>Location:</strong> Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
