import multiplicar from "./multiplicar.js";

describe("Multiplicador", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});


