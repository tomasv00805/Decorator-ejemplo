import Soldadodecorator from "./Soldadodecorator";

export class Chalecodecorator extends Soldadodecorator {
    
    daniorecibido(): number {
        return this.enemigo.daniorecibido() / 4;
    }
}