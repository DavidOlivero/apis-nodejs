// Los test unitarios son para comprobar funciones o métodos del proyecto
import { expect, describe, it } from "vitest";

function doble(n: number): number {
  return n * 2;
}

// Sirve para crear un suite de test que contenga un grupo de test para ejecutar todos los test de forma agrupada
describe('Suite de prueba para el curso', () => {
  // Este un test
  it('Should return a number 2', () => {
    const resultado = doble(1);
    expect(resultado).equal(2);
  })
})
