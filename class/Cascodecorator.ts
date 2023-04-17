import Soldadodecorator from "./Soldadodecorator";

export class Cascodecorator extends Soldadodecorator {

    dañorecivido(): number {
        return this.enemigo.dañorecivido() / 2;
    }
}