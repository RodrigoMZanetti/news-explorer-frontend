import React from "react";
import authorPhoto from "../../images/foto_author.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img
        src={authorPhoto}
        alt="photo of the author"
        className="about__image"
      />
      <div className="about__text-container">
        <h1 className="about__title">Sobre o autor</h1>
        <p className="about__text">
          I'm Rodrigo. I've always been passionate about technology, and in
          2022, I started getting interested in web and app development. I
          studied on my own until, in 2025, I decided to turn that hobby into a
          career through a job-focused bootcamp.
        </p>
        <p className="about__text">
          Since then, I've been building projects with HTML, CSS, JavaScript, TS
          and libraries like React and Redux, as well as full-stack
          applications, always looking to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;
