import { createCard } from './CreateCard.js';

const hech = document.getElementById('hechizos');
const url = "https://harry-potter-api.onrender.com/db";

function hechizos(){

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.hechizos.forEach((hechizo) => {
          const card = createCard(hechizo);
          if (card) {
            hech.appendChild(card);
          }
        });
      })
      .catch((e) => console.log(e));
}

export default hechizos;