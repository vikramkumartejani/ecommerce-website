import React from "react";
import Member1 from "../../assets/team_1.webp";
import Member2 from "../../assets/team_2.webp";
import Member3 from "../../assets/team_3.webp";
import Member4 from "../../assets/team-4.webp";
import "./about.css";

const About = () => {
  return (
    <div className="max-width">
      <section className="about_banner flex">
        <h1>#KnowUs</h1>
      </section>

      <section className="about_us">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus
          fugit assumenda commodi id odit quia vel at enim ducimus tempora quae,
          dolorem minima, doloremque natus tenetur quisquam officia voluptatibus
          recusandae voluptatum et sequi sed dolores? Assumenda consequuntur
          illum tempore ex qui architecto aperiam ducimus soluta a? Dolores,
          quibusdam quae.
        </p>
      </section>

      <section className="team_Container">
        <h3>Meet Our Team</h3>
        <p>
          A perfect blend of creativity and technical wizardry The best people
          fomula for great websites!
        </p>
        <div className="member_container">
          <div className="member">
            <div className="member_Image">
              <img src={Member1} alt="Member 1" />
            </div>
            <h3>BRYAN JHONSON</h3>
            <span>CEO & Co-Founder</span>
          </div>
          <div className="member">
            <div className="member_Image">
              <img src={Member2} alt="Member 2" />
            </div>
            <h3>Annie Taylor</h3>
            <span>Designer</span>
          </div>
          <div className="member">
            <div className="member_Image">
              <img src={Member2} alt="Member 3" />
            </div>
            <h3>MARIANE SMITH</h3>
            <span>Developer</span>
          </div>
          <div className="member">
            <div className="member_Image">
              <img src={Member4} alt="Member 4" />
            </div>
            <h3>MARIANE SMITH</h3>
            <span>Customer Care</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
