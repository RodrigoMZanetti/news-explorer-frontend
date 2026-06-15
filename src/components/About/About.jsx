import React from "react";
import authorPhoto from "../../images/autor.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img src={authorPhoto} alt="photo of the author" />
      <h1>Sobre o autor</h1>
      <p>
        Esse bloco descreve o autor do projeto. Aqui você deve indicar seu nome,
        o que você faz e quais tecnologias de desenvolvedor você conhece.
      </p>
      <p>
        Você também pode falar sobre sua experiência com o Practicum, o que
        aprendeu lá e como pode ajudar clientes em potencial.
      </p>
    </section>
  );
}

export default About;
