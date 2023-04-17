import { Soldado } from "./Soldado";

export default abstract class Soldadodecorator implements Soldado {
    
    protected enemigo: Soldado;

    constructor(enemigo: Soldado) {
        this.enemigo = enemigo;
    }

    dañorecivido(): number {
        return this.enemigo.dañorecivido();
    }
}