import joi from "joi";  //impotando o joi(validação)

// Validação para inclusão de modelo carro
export const modelocarro = joi.object({
    nome: joi.string().min(3).required(),  //Nome do carro min. 3 Caracter
    sigla: joi.string().length(3).required(), //Sigla do carro, 3 Caracter
   potencia: joi.number().min(1).required(), // Potência mínima de 3 CV
   velocidadeMaxima: joi.number().min(1).required(), // Velocidade Min. de 1
   consumo: joi.number().min(0.1).required(), // Consumo mínimo de 0.1
   aceleracao: joi.number().min(0).required(), // Aceleração min. de 0
   preco: joi.number().min(0).required(), //Preço min. de 0
});
// Validação para atualização  do carro
export const modeloAtualizacaoCarro = joi .object({
    nome: joi.string().min(3), //nome do carro, opcional
    sigla: joi.string().length(3), // Sigla carro, opcional
    potencia: joi.number().min(1), // Potência, opcional
    velocidadeMaxima: joi.number().min(0), // Velocidade Máxima, opcional
    consumo: joi.number().min(0.1), // Consumo, opcional
    aceleracao: joi.number().min(0), // Aceleração, opcional
    preco: joi.number().min(0), // Preço, opcional
   // ano: joi.number().integer().min(1886).max(new date().getfullYear()),

}).min(1); //Pelo menos um campo precisa ser atualizado
