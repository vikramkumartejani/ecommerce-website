import React from "react";
import "./contact.css";
import Icon1 from "../../assets/icon-1.webp";
import Icon2 from "../../assets/icon-2.webp";
import Icon3 from "../../assets/icon-3.webp";

const Contact = () => {
  return (
    <div className="max-width">
      <section className="contact_banner flex">
        <h1>#let's_talk</h1>
      </section>

      {/* ============================================ Loaction Container  */}
      <section class="icons-container">
        <div class="contact_icons flex">
          <img src={Icon1} alt="Opening Time" />
          <h3>9:00am to 10:30pm</h3>
        </div>

        <div class="contact_icons flex">
          <img src={Icon2} alt="Contact Number" />
          <h3>+92-332-45-7890</h3>
        </div>

        <div class="contact_icons flex">
          <img src={Icon3} alt="Location" />
          <h3>Karachi, Pakistan - 400104</h3>
        </div>
      </section>

      {/* ============================================== > Contact form  */}
      <section className="contact_form">
        <form>
          <div class="inputBox">
            <label>Your Name</label>
            <input type="text" placeholder="Customer's name" />
          </div>
          <div class="inputBox">
            <label>Your Email</label>
            <input type="email" placeholder="Customer's email" />
          </div>
          <div class="inputBox">
            <label>Your Number</label>
            <input type="text" placeholder="Customer's Number" />
          </div>
          <div class="inputBox">
            <label>Your Message</label>
            <textarea cols="30" rows="3" placeholder="Your message"></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="contact_map">
          <div class="inputBox">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.708810911!2d66.49600269274562!3d25.192983774904466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691754473847!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
