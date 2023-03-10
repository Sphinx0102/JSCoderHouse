export function createCard(data) {
	const card = document.createElement("div");
	const imagen = document.createElement("img");
	const description = document.createElement("p");
	const checkbox = document.createElement("input");
	
	card.classList.add("card");
	if(data.personaje){
		if(data.casaDeHogwarts != "ninguna"){
			imagen.src = data.imagen;
			description.textContent = data.personaje;
			checkbox.type = "checkbox";
		}else{
			checkbox.hidden = true;
		}
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

	if(data.nombre == 'tenebroso' || data.casaDeHogwarts == 'Slytherin'){
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