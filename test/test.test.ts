import { Cascodecorator } from "../class/Cascodecorator";
import { Soldado } from "../class/Soldado";
import { Chalecodecorator } from "../class/Chalecodecorator";


test('Soldado', () => {
    const soldado = new Soldado();
    expect(soldado.dañorecivido()).toBe(10);
});

test('Chaleco', () => {
    const soldado = new Soldado();
    const soldadochaleco = new Chalecodecorator(soldado);
    expect(soldadochaleco.dañorecivido()).toBe(2.5);
});

test('Casco', () => {
    const soldado = new Soldado();
    const soldadocasco = new Cascodecorator(soldado);
    expect(soldadocasco.dañorecivido()).toBe(5);
});

test('Chaleco y Casco', () => {
    const soldado = new Soldado();
    const soldadochaleco = new Chalecodecorator(soldado);
    const soldadochalecocasco = new Cascodecorator(soldadochaleco);
    expect(soldadochalecocasco.dañorecivido()).toBe(1.25);
});