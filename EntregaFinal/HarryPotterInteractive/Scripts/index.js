const url = "https://harry-potter-api.onrender.com/db"

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		/*
			Trae toda la info de la API y la deja dentro de la variable data
			También muestra la variable data por consola
		*/
		console.log(data)
	})
	.catch((e) => console.log(e))