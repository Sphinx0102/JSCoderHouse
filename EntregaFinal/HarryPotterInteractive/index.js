const url = "https://harry-potter-api.onrender.com/db"

const bandoSection = document.getElementById('bando');
const personajesSection = document.getElementById('personajes');
const hechizosSection = document.getElementById('hechizos');

const perfil = {
	bando: '',
	bando_img: '',
	personaje_name: '',
	personaje_img: '',
	hechizos: [],
};

const bandos = [
	{
		nombre: "orden",
		datos: {
			titulo: "Orden del Fénix",
			descripcion:
				"La Orden del Fénix es una organización secreta fundada por Albus Dumbledore para luchar contra Lord Voldemort y sus seguidores durante la Primera Guerra Mágica.",
			logo: "https://i.pinimg.com/736x/c9/c4/bb/c9c4bbeb0d74a36d48d4f484c9e77fd7.jpg",
		},
	},
	{
		nombre: "tenebroso",
		datos: {
			titulo: "Magos Tenebrosos",
			descripcion:
				"Los Magos Tenebrosos son aquellos que utilizan la magia para fines malignos y buscan el poder y la dominación sobre los demás.",
			logo: "https://i.pinimg.com/564x/33/86/3e/33863ea103afb60b1b960ed9b509ede0.jpg",
		},
	},
];

function createCard(data) {
	const card = document.createElement("div");
	const imagen = document.createElement("img");
	const description = document.createElement("p");
	const checkbox = document.createElement("input");

	card.classList.add("card");
	if (data.personaje) {
		if (data.casaDeHogwarts != "ninguna") {
			imagen.src = data.imagen;
			description.textContent = data.personaje;
			checkbox.style.display = "none"
		}
	} else if (data.uso) {
		const nombre = document.createElement("h1");
		nombre.textContent = data.hechizo;
		card.appendChild(nombre);
		description.textContent = data.uso;
		checkbox.type = "checkbox";
	} else {
		imagen.src = data.datos.logo;
		description.textContent = data.datos.descripcion;
		checkbox.type = "checkbox";
	}

	card.appendChild(imagen);
	card.appendChild(description);
	card.appendChild(checkbox);

	if (data.nombre == 'tenebroso' || data.casaDeHogwarts == 'Slytherin') {
		card.setAttribute("id", "tenebroso");
	}
	else if (data.nombre == 'orden') {
		card.setAttribute("id", "orden");
	}

	if (data.datos) {
		bandoSection.appendChild(card);
	}
	else if (data.personaje) {
		card.setAttribute("class", "card-personaje");
		personajesSection.appendChild(card);
	}
	else if (data.hechizo) {
		card.setAttribute("class", "hechizo");
		hechizosSection.appendChild(card);
	}
	else {
		console.log("Error al Crear la card");
	}


}

bandos.forEach((bando) => createCard(bando));

const orden = document.getElementById('orden');
const tenebroso = document.getElementById('tenebroso');
const personaje = document.querySelector('.personaje');

function createButton(text, id) {
	const button = document.createElement("a");
	button.textContent = text;
	button.setAttribute("href", `#${id}`);
	button.setAttribute("id", `btn-${id}`)
	button.setAttribute("class", "button");
	const routes = document.getElementById("nav-buttons");
	routes.appendChild(button);
}



createButton("Bando", "bando");
createButton("Personajes", "personajes");
createButton("Hechizos", "hechizos");

function filtrarPorCasa(personajes, casa, casa2) {
	return personajes.filter((personaje) => (personaje.casaDeHogwarts === casa) || (personaje.casaDeHogwarts === casa2));
}

function filtrarPorHechizo(hechizos, maleficios){
	return hechizos.filter((hechizo) => !maleficios.includes(hechizo))
}

fetch(url)
	.then((res) => res.json())
	.then((data) => {


		orden.addEventListener("click", () => {
			const personajesOrden = filtrarPorCasa(data.personajes, "Gryffindor" , "Ravenclaw");
			const personajesEl = document.querySelectorAll(".personaje");
			personajesEl.forEach((el) => el.remove());
			personajesSection.innerHTML = "";
			personajesOrden.forEach((personaje) => {
				createCard(personaje);
			});
			
			perfil.bando = bandos[0].datos.titulo;
			perfil.bando_img = bandos[0].datos.logo;
			console.log(perfil);
		});

		tenebroso.addEventListener("click", () => {
			const personajestene = filtrarPorCasa(data.personajes, "Slytherin" , "");
			const personajesEl = document.querySelectorAll(".personaje");
			personajesEl.forEach((el) => el.remove());
			personajesSection.innerHTML = "";
			personajestene.forEach((personaje) => {
				createCard(personaje);
			});
			
			perfil.bando = bandos[1].datos.titulo;
			perfil.bando_img = bandos[1].datos.logo;
			console.log(perfil);
		});

		personaje.addEventListener("click", () => {
			const maleficios = ["Avada Kedavra", "Imperio", "Crucio"]

			const hechizosOrden= filtrarPorHechizo(data.hechizos, maleficios)
		});
	})
	.catch((e) => console.log(e))

