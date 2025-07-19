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
    <section className="py-16 px-8" id="contact">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Have questions, suggestions or complaints? We'd love to hear from you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 text-base border-2 border-green-200 rounded-lg 
                focus:outline-none focus:border-green-600 focus:ring-0 
                transition-colors duration-200"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 text-base border-2 border-green-200 rounded-lg 
                focus:outline-none focus:border-green-600 focus:ring-0 
                transition-colors duration-200"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 text-base border-2 border-green-200 rounded-lg 
              focus:outline-none focus:border-green-600 focus:ring-0 
              transition-colors duration-200 resize-vertical"
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 
              text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {message && (
            <p className={`mt-4 text-center font-medium ${
              message.includes('successfully') ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </p>
          )}
        </form>

        <div className="text-center bg-green-50 p-8 rounded-lg border border-green-200 max-w-3xl mx-auto">
          <div className="space-y-3 text-lg text-gray-700">
            <p><strong className="text-gray-900">Email:</strong> support@farmart.com</p>
            <p><strong className="text-gray-900">Phone:</strong> +254 712 345678</p>
            <p><strong className="text-gray-900">Location:</strong> Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;