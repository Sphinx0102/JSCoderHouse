import { createCard } from './CreateCard.js';

const pers = document.getElementById('personajes');
const url = "https://harry-potter-api.onrender.com/db";

function personajes(){
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.personajes.forEach((personaje) => {
          const card = createCard(personaje);
          if (card) {
            pers.appendChild(card);
          }
        });
      })
      .catch((e) => console.log(e));
}

export default personajes;
