export class ContenedorMemoria {
    constructor(rutaArchivo) {
        this.operaciones = []
    }

    async guardar(obj) {
        this.operaciones.push(obj)
    }

    async listar() {
        return this.operaciones
    }
}