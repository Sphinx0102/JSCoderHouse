
const url = "https://harry-potter-api.onrender.com/db"


const container = document.getElementById('container');

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
	imagen.src = data.datos.logo;
	description.textContent = data.datos.descripcion;
	checkbox.type = "checkbox";
	
	card.appendChild(imagen);
	card.appendChild(description);
	card.appendChild(checkbox);
	container.appendChild(card);

	if(data.nombre == 'tenebroso'){
		card.setAttribute("id", "tenebroso");
	}
	else if (data.nombre == 'orden'){
		card.setAttribute("id", "orden");
	}

}

bandos.forEach((bando) => createCard(bando));

const borderOrden = document.getElementById('orden');
const borderTene = document.getElementById('tenebroso');

let fire = document.createElement('div');
fire.classList.add('fire');
borderOrden.appendChild(fire);
borderTene.appendChild(fire);

setInterval(() => {
	let x = Math.random() * 100;
	let y = Math.random() * 100;
	smoke.style.left = `${x}%`;
	smoke.style.top = `${y}%`;
}, 1000);



fetch(url)
	.then((res) => res.json())
	.then((data) => {
		





	})
	.catch((e) => console.log(e))

