import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>👋 Hey there, food lover!</h1>
        <p>
          Tired of the same old takeout routine? We're the rebels of food delivery, bringing you
          the tastiest eats with a side of fun. No boring rules, just good food, fast.
        </p>
      </header>

      <div className="about-content">
        <section className="about-section story-section">
          <h2>Our Epic Tale 📖</h2>
          <p>
            It all started with a craving and a keyboard. We realized the world needed a delivery app
            that wasn't just a list of restaurants, but a portal to food adventures. We teamed up with
            the coolest chefs and the zaniest delivery heroes to make it happen. Now, your food journey
            is just a few taps away!
          </p>
        </section>

        <section className="about-section why-us-section">
          <h2>Why We're Your New Bestie? 😎</h2>
          <ul className="perks-list">
            <li className="perk-item">
              <span role="img" aria-label="Rocket emoji" className="perk-icon">🚀</span>
              <div className="perk-text">
                <h3>Blazing Fast Delivery</h3>
                <p>We're faster than your hunger pangs. Your food will arrive before you can say "I'm hangry!"</p>
              </div>
            </li>
            <li className="perk-item">
              <span role="img" aria-label="Heart emoji" className="perk-icon">❤️</span>
              <div className="perk-text">
                <h3>Supporting Local Heroes</h3>
                <p>Every order you place helps a local chef do a happy dance. You're a hero, too!</p>
              </div>
            </li>
            <li className="perk-item">
              <span role="img" aria-label="Star emoji" className="perk-icon">✨</span>
              <div className="perk-text">
                <h3>Flavor-Packed Variety</h3>
                <p>From gourmet burgers to authentic tacos, we've got a menu that'll make your taste buds sing.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <footer className="about-footer">
        <p>Ready to join the flavor revolution?</p>
        <a href="/" className="order-button">Let's Go Eat! 🎉</a>
      </footer>
    </div>
  );
};

export default About;