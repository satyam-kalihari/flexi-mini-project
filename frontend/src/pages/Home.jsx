import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Layout>
      
      <section className="hero">
        <div className="container">
          <h1>Dangerous corners of our planet. People change after our tours. Forever.</h1>
          <p>Discover the world through our eyes. Experience life-changing adventures with Trail Makers.</p>
          <a href="#packages" className="btn">Explore Our Tours</a>
        </div>
      </section>

      
      <section id="treks" className="popular-treks">
        <div className="container">
          <div className="section-title">
            <h2>Most Popular Trekking Destinations</h2>
            <p>Explore our most sought-after trekking adventures around the world</p>
          </div>
          <div className="treks-grid">
            <div className="trek-card">
              <div className="trek-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="trek-content">
                <h3>Everest Base Camp Trek</h3>
                <div className="trek-meta">
                  <span><i className="far fa-clock"></i> 14 Days</span>
                  <span><i className="fas fa-mountain"></i> Challenging</span>
                </div>
                <p>The Everest Base Camp trek is a classic Himalayan adventure, leading you through Sherpa villages and breathtaking mountain scenery to the foot of the world's highest peak.</p>
                <a href="#" className="btn">Read More</a>
              </div>
            </div>
            <div className="trek-card">
              <div className="trek-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="trek-content">
                <h3>Annapurna Circuit Trek</h3>
                <div className="trek-meta">
                  <span><i className="far fa-clock"></i> 18 Days</span>
                  <span><i className="fas fa-mountain"></i> Strenuous</span>
                </div>
                <p>The Annapurna Circuit is a legendary trek that circles the Annapurna Massif, offering diverse landscapes from lush subtropical forests to arid high-altitude deserts.</p>
                <a href="#" className="btn">Read More</a>
              </div>
            </div>
            <div className="trek-card">
              <div className="trek-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="trek-content">
                <h3>Kilimanjaro Machame Route</h3>
                <div className="trek-meta">
                  <span><i className="far fa-clock"></i> 7 Days</span>
                  <span><i className="fas fa-mountain"></i> Challenging</span>
                </div>
                <p>The Machame route is the most popular and scenic route to the summit of Mount Kilimanjaro, offering a diverse range of landscapes and a high success rate.</p>
                <a href="#" className="btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="discover">
        <div className="container">
          <div className="section-title">
            <h2>Discover the World Through Our Eyes</h2>
            <p>Explore diverse destinations across all continents</p>
          </div>
          <div className="discovery-grid">
            <div className="discovery-card">
              <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="North America" />
              <h3>North America</h3>
            </div>
            <div className="discovery-card">
              <img src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="South America" />
              <h3>South America</h3>
            </div>
            <div className="discovery-card">
              <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Europe" />
              <h3>Europe</h3>
            </div>
            <div className="discovery-card">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Australia" />
              <h3>Australia</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-us">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>We are Trail Makers</h2>
              <p>Founded in 1996 in Amsterdam, Trail Makers has grown from a small Dutch start-up to one of the world's leading digital travel companies. Part of Travelocity Holdings inc., Trail Makers' mission is to make it easier for everyone to experience the world.</p>
              <p>By investing in technology that takes the friction out of travel, Trail Makers seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and an incredible place to stay - from homes to mountains, and much more.</p>
              <p>As one of the world's largest travel marketplaces for both established brands and entrepreneurs of all sizes, Trail Makers enable properties around the world to reach a global audience and grow their businesses.</p>
              <a href="#" className="btn">Learn More</a>
            </div>
            <div className="about-img">
              <img src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Trail Makers Team" />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="packages">
        <div className="container">
          <div className="section-title">
            <h2>Top Packages For You</h2>
            <p>Carefully curated adventure packages for all experience levels</p>
          </div>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="package-content">
                <h3>The Kesugi Ridge Trail</h3>
                <div className="package-meta">
                  <span><i className="far fa-clock"></i> 3-4 days</span>
                  <span><i className="fas fa-map-marker-alt"></i> Alaska, USA</span>
                </div>
                <p>Experience the breathtaking beauty of Alaska's wilderness on this multi-day ridge hike with stunning views of Denali.</p>
                <div className="package-price">$1,299</div>
                <Link to="/package/the-kesugi-ridge-trail" className="btn">Book Now</Link>
              </div>
            </div>
            <div className="package-card">
              <div className="package-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="package-content">
                <h3>Alps Adventure</h3>
                <div className="package-meta">
                  <span><i className="far fa-clock"></i> 7-10 days</span>
                  <span><i className="fas fa-map-marker-alt"></i> Europe - France, Italy, Switzerland</span>
                </div>
                <p>Explore the majestic Alps across three countries with experienced guides and comfortable accommodations.</p>
                <div className="package-price">$2,499</div>
                <Link to="/package/alps-adventure" className="btn">Book Now</Link>
              </div>
            </div>
            <div className="package-card">
              <div className="package-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="package-content">
                <h3>Patagonia Wilderness</h3>
                <div className="package-meta">
                  <span><i className="far fa-clock"></i> 14 days</span>
                  <span><i className="fas fa-map-marker-alt"></i> Chile & Argentina</span>
                </div>
                <p>Journey through the stunning landscapes of Patagonia, from Torres del Paine to Fitz Roy massif.</p>
                <div className="package-price">$3,799</div>
                <Link to="/package/patagonia-wilderness" className="btn">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Hear from travelers who have experienced our adventures</p>
          </div>
          <div className="review-card">
            <div className="review-text">
              "The tours in this website are great. I had been really enjoying with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!"
            </div>
            <div className="review-author">
              <div className="author-img">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Eva Chance" />
              </div>
              <div className="author-info">
                <h4>Eva Chance</h4>
                <p>Adventure Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <h2>Special Discount</h2>
          <p>Subscribe to our newsletter and get exclusive offers and updates on our latest adventures</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <form id="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><i className="fas fa-envelope"></i> Contact@trailmakers.com</p>
              <p><i className="fas fa-phone"></i> +412541 6574 25</p>
              <p><i className="fas fa-map-marker-alt"></i> E 7th, St North Little Rock<br />AR 72114-4973, USA</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;