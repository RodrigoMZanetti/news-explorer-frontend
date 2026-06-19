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
          Sou Rodrigo, sempre fui apaixonado por tecnologia e, em 2022, comecei
          a me interessar por desenvolvimento de sites e aplicativos. Estudei
          por conta própria até decidir, em 2025, transformar esse hobby em
          profissão através de um bootcamp com foco no mercado de trabalho.
        </p>
        <p className="about__text">
          Desde então venho desenvolvendo projetos com HTML, CSS, JavaScript e
          bibliotecas como React e Redux, além de aplicações full-stack, sempre
          buscando aprender e evoluir como desenvolvedor.
        </p>
      </div>
    </section>
  );
}

export default About;
