import React from "react";
import "../styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.</p>
            </header>
            <div className="contact-content">
                <section className="contact-section">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </section>
                <section className="contact-section info-section">
                    <h2>Contact Information</h2>
                    <div className="info-item">
                        <span role="img" aria-label="phone">📞</span>
                        <div className="info-text">
                            <h3>Phone</h3>
                            <p>+1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span role="img" aria-label="email">📧</span>
                        <div className="info-text">
                            <h3>Email</h3>
                            <p>support@yourbrand.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span role="img" aria-label="location">📍</span>
                        <div className="info-text">
                            <h3>Address</h3>
                            <p>123 Foodie Ave, Flavor Town, USA 12345</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">
                            <span role="img" aria-label="facebook">📘</span>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <span role="img" aria-label="twitter">🐦</span>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <span role="img" aria-label="instagram">📸</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;