import { iSoldadobase } from "./iSoldadobase";
export class Soldado implements iSoldadobase {
    dañorecivido(): number {
        return 10;
    }
}