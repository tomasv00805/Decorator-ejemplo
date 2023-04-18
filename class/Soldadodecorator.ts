import { Soldado } from "./Soldado";

export default abstract class Soldadodecorator implements Soldado {
    
    protected enemigo: Soldado;

    constructor(enemigo: Soldado) {
        this.enemigo = enemigo;
    }

    daniorecibido(): number {
        return this.enemigo.daniorecibido();
    }
}