const misDatos = {
	nombre: "Francisco",
	apellido: "Maigua",
	edad: 39,
	altura: 172,
	eresDesarrollador: true,
};
const edad = misDatos.edad;

const datosAmigos = [
	{
		nombre: "Emanuel",
		apellido: "Vilca",
		edad: 42,
		altura: 168,
		eresDesarrollador: false,
	},
	{
		nombre: "Dario",
		apellido: "Silvan",
		edad: 38,
		altura: 170,
		eresDesarrollador: false,
	},
];
const listObj = [misDatos, ...datosAmigos];

const listOrdenada = listObj.sort((a, b) => a.edad - b.edad);
