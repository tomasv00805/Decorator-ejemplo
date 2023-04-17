import Soldadodecorator from "./Soldadodecorator";

export class Chalecodecorator extends Soldadodecorator {
    
    dañorecivido(): number {
        return this.enemigo.dañorecivido() / 4;
    }
}