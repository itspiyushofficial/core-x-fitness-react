function Contact() {
  return (
    <section className="section contact-section">
      <h2>Contact Us</h2>

      <div className="contact-form-wrapper">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="form-group">
            <input type="number" placeholder="Age" required />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Mobile Number" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Your Message" rows="4"></textarea>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
