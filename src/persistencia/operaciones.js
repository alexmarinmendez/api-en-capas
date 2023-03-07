import { ContenedorArchivo } from "./ContenedorArchivo.js"
import { ContenedorMemoria } from "./ContenedorMemoria.js"

let contenedor 

if (process.argv[2] === 'archivo') {
    contenedor = new ContenedorArchivo('./db.json')
} else {
    contenedor = new ContenedorMemoria()
}

export async function guardar(obj) {
    return contenedor.guardar(obj)
}

export async function listar() {
    return contenedor.listar()
}