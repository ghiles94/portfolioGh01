import React from "react";
import "./Projets.css";
import { Link } from "react-router-dom";

function Projets() {
  const projets = [
    {
      id: 1,
      titre: "Projet en C# ",
      description:
        "Développement d'une application en C# avec pour objectif de gérer les commandes d’un restaurant",
      image: "https://picsum.photos/1920/1080",
    },
    {
      id: 2,
      titre: "Projet 2",
      description:
        "Création d'une application web complète utilisant Express pour le backend et Vue.js pour le frontend. L'application permettait de gérer une pizzeria autant que gestionnaire.",
      image: "https://picsum.photos/1920/1080",
    },
    {
      id: 3,
      titre: "Projet avec React",
      description:
        "Réalisation d'un projet utilisant React pour créer une interface utilisateur réactive et dynamique. L'objectif était de créer une page portfolio qui contient une interface plus des compétences qui aide à la recherche d’un emploi.",
      image: "https://picsum.photos/1920/1080",
    },
  ];

  return (
    <div className="projets">
      <div className="projetsContainer">
        <h1 className="projetsTitle">Projets</h1>
        <div className="projetsCards">
          {projets.map((projet) => (
            <Link to={`/projets/${projet.id}`} className="projetsCardLink">
              <div key={projet.id} className="projetsCard">
                <div className="projetsCardImage">
                  <img src={projet.image} alt={projet.titre} />
                </div>
                <h3>{projet.titre}</h3>
                <p>{projet.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projets;
