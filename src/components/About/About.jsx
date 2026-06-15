import React from "react";
import authorPhoto from "../../images/autor.jpg";
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
          Esse bloco descreve o autor do projeto. Aqui você deve indicar seu
          nome, o que você faz e quais tecnologias de desenvolvedor você
          conhece.
        </p>
        <p className="about__text">
          Você também pode falar sobre sua experiência com o Practicum, o que
          aprendeu lá e como pode ajudar clientes em potencial.
        </p>
      </div>
    </section>
  );
}

export default About;
