const {encode, decode} = require('../encode.js');

describe('Name of the group', () => {
    it('Teste se encode e decode são funções;', () => {
       expect(typeof encode).toEqual('function'); 
       expect(typeof decode).toEqual('function');
    });
    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        expect(encode('ana')).toMatch('1n1')
        expect(decode('1n1')).toMatch('ana')
    });
    it('Se não são convertidos', () => {
        expect(encode('')).toMatch('')
    });
   it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('juliana').length).toBe(7);
    expect(decode('juliana').length).toBe(7);
   }); 
});

// Para as funções encode e decode, crie os seguintes testes em Jest:
// Teste se encode e decode são funções;
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
