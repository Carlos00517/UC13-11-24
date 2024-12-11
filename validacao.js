import joi from "joi";  //impotando o joi(validação)

// Validação para inclusão de modelo carro
export const modelocarro = joi.object({ 
    nome: joi.string().min(3).required().messages({
        'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
        'any.required': 'O nome do carro é obrigatório.',
    }), //Nome do carro min. 3 Caracter
    sigla: joi.string().length(3).required().messages({
        'string.min': 'A sigla deve ter pelo menos 3 caracteres.',
        'any.required': 'A sigla é obrigatória.',
    }), //Sigla do carro, 3 Caracter
   potencia: joi.number().min(1).required().messages({
        'string.min': 'A potência deve ser igual ou maior a 1.',
        'any.required': 'A potência é obrigatória.',
   }), // Potência mínima de 3 CV
   velocidadeMaxima: joi.number().min(1).required().messages({
        'string.min': 'A velocidade máxima deve ser maior ou igual a 1.',
        'any.required': 'A velocidade máxima é obrigatória.'
   }), // Velocidade Min. de 1
   consumo: joi.number().min(0.1).required().messages({
        'string.min': 'O consumo deve ser maior ou igual a 0.1.',
        'any.required': ' O consumo é obrigatório.',
   }), // Consumo mínimo de 0.1
   aceleracao: joi.number().min(0).required().messages({
        'string.min': ' A aceleração deve ser maior ou igual a 0.',
        'any.required': 'A aceleração é obrigatória.',
   }), // Aceleração min. de 0
   preco: joi.number().min(0).required().messages({
        'string.min': 'O preço dever ser maior ou igual a 1.',
        'any.required':'O preço é obrigatório.',
   }), //Preço min. de 0
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



//node app.js
//localhost:3000/