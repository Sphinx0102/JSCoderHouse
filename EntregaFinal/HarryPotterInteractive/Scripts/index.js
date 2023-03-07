const url = "https://harry-potter-api.onrender.com/db"


const bando = document.getElementById('bando');
const personajes = document.getElementById('personajes');
const hechizos = document.getElementById('hechizos');

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
	if(data.personaje){
		imagen.src = data.imagen;
		description.textContent = data.personaje;
		checkbox.type = "checkbox";
	}else if(data.uso){
		const nombre = document.createElement("h1");
		nombre.textContent = data.hechizo;
		card.appendChild(nombre);
		description.textContent = data.uso;
		checkbox.type = "checkbox";
	}else{
		imagen.src = data.datos.logo;
		description.textContent = data.datos.descripcion;
		checkbox.type = "checkbox";
	}
	
	card.appendChild(imagen);
	card.appendChild(description);
	card.appendChild(checkbox);

	if(data.nombre == 'tenebroso' || (data.casaDeHogwarts == 'Slytherin' || data.casaDeHogwarts == 'ninguna' )){
		card.setAttribute("id", "tenebroso");
	}
	else if (data.nombre == 'orden'){
		card.setAttribute("id", "orden");
	}

	if(data.datos){
		bando.appendChild(card);
	}
	else if(data.personaje){
		card.setAttribute("class", "personaje");
		personajes.appendChild(card);
	}
	else if(data.hechizo){
		card.setAttribute("class", "hechizo");
		hechizos.appendChild(card);
	}
	else{
		console.log("Error al Crear la card");
	}
	

}

bandos.forEach((bando) => createCard(bando));

const orden = document.getElementById('orden');
const tenebroso = document.getElementById('tenebroso');

function createButton(text, id) {
	const button = document.createElement("button");
	button.textContent = text;
	button.addEventListener("click", () => {
	  const element = document.getElementById(id);
	  element.scrollIntoView({ behavior: "smooth" });
	});
	const routes = document.getElementById("routes");
	routes.appendChild(button);
}
  
createButton("Bando", "bando");
createButton("Personajes", "personajes");
createButton("Hechizos", "hechizos");


fetch(url)
	.then((res) => res.json())
	.then((data) => {

		data.personajes.forEach((personaje) => {
			createCard(personaje);
		});

		orden.addEventListener("click", ()=>{
			personajes.scrollIntoView();
		});
		tenebroso.addEventListener("click", ()=>{
			personajes.scrollIntoView();
		});

		data.hechizos.forEach((hechizo) => {
			createCard(hechizo);
		});
	})
	.catch((e) => console.log(e))

