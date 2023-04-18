import Soldadodecorator from "./Soldadodecorator";

export class Cascodecorator extends Soldadodecorator {

    daniorecibido(): number {
        return this.enemigo.daniorecibido() / 2;
    }
}