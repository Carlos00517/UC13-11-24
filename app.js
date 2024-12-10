import carros2024 from './tabelacarros.js';
import express from 'express';

import { modelocarro, modeloAtualizacaoCarro} from './validacao.js';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024);
});
//----------------------------------------------------------------------------------------------
app.get ('/:sigla', (requisicao, resposta) => {
    const siglainformada =  requisicao.params.sigla.toUpperCase(); // Obtendo a sigla
    const carro = carros2024.find((infocarro) => infocarro.sigla === siglainformada); // Buscando o carro pela sigla
    if (!carro) {
    //! Vazio not
    resposta
    .status(404)
    .send(
        'Não existe um carro com a sigla informada !' //Resposta de erro
    );
    return;
    }
    resposta.status(200).send(carro); // se encontrado a sigla retorna a resposta correta 
});

//-----------------------------------------------------------------------------------------------
app.post('/', (req, res) => {
    const novoCarro =  req.body; // Obtem o corpo enviado para incluir um carro.
    // JOI
    const{error} = modelocarro.validate(novoCarro)
    if (error){
        //Se houver erro retona erro 400 (bad request)
        res.status(400).send(error);
        return;
    }
    carros2024.push(novoCarro); //Adiciona o novo carro a lista de carros.
    res.status(201).send(novoCarro); //Retorna o carro adicionado  com status 200(ok).
});

//-----------------------------------------------------------------------------------------------
app.put('/:sigla', (req, res) => {
    const  siglainformada =req.params.sigla.toUpperCase();
    const carroselecionado = carros2024.find(c => c.sigla === siglainformada);
    if (!carroselecionado) {
        res
        .status(404)
        .send(
            'Não existe um carro com  sigla informada!' // mensagem de erro
        );
        return;
    };
    // JoI
    const {error} = modeloAtualizacaoCarro.validate(req.body);
    if (error) {
        // Se houver no modelo/validação retorna carro
        res.status(400).send(error);
        return;
    }

    const campos = Object.keys(req.body); // Obtem o corpo da requisição enviada
    for(let campo of campos) {
        carroselecionado[campo] = req.body[campp]; // Atualiza o carro com a informação
    }
    res.status(200).send(carroselecionado); // Retorna a lista atualizada
});
//-----------------------------------------------------------------------------------------------

app.delete('/:sigla', (req, res) => {
    const siglainformada = req.params.sigla.toUpperCase();
    const Indicecarroselecionado = carros2024.findIndex(   
        (c) => c.sigla === siglainformada
    );
   if(Indicecarroselecionado === -1) {
    res
    .status(404)
    .send(
        'Não existe um carro com a sigla informada!'
    );
    return;
};
    const carroremovido = carros2024.splice(Indicecarroselecionado, 1);
    res.status(200).send(carroremovido);
});

//----------------------------------------------------------------------------------------------


//inicia o servidor na porta 3000:
app.listen(3000,() => console.log("servidor rodando com sucesso"));


//node app.js
//localhost:3000/