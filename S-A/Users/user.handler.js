const crud = require("../crud");
const nomeTabela = "Users";

//1 - receber dados: Id, CPF, Name, User, Senha
//2 - verificar campo CPF
//3 - verificar campo Name
//4 - vericar campo User
//5 - verificar campo Senha
//6 - verificar se CPF já existe - opcional
//7 - Retornar um erro caso não atenda as condições
//8 - Cadastrar user
//9 - Retornar o sucesso do cadastro


async function cadastrarUser(dados = {CPF: "", Name: "", Password: ""}){
    if(!dados.CPF){
        return {
            error: "0001", message: "É necessario preencher os parâmetros da requisição!",
            camposNecessarios: ["CPF"]
        }
    }
    if(!dados.Name){
        return {
            error: "0001", message: "É necessario preencher os parâmetros da requisição!",
            camposNecessarios: ["Name"]
        }
    }
    if(!dados.Password){
        return {
            error: "0001", message: "É necessario preencher os parâmetros da requisição!",
            camposNecessarios: ["Password"]
        }
    }
    if(dados.CPF.length != 11){
        return {
            error: "0005", message: "Dados Incoerentes!",
            campo: ["CPF"]
        }
    }

    if(await verificarCadastrados("Users", dados.CPF)){
        return {
            error: "0006", message: "Dados já cadastrados!",
            campo: ["CPF"]
        }
    }
    
    const Users = await crud.save(nomeTabela, undefined, dados);
    return Users;
}

async function verificarCadastrados(Tabela, id) {
    let naoCadastrado = false;
    try {
        let CPFs = await crud.getWithFilter(Tabela, "CPF", "==", id);
        if(CPFs[0]){
            naoCadastrado = true;
            return naoCadastrado;
        }
    } catch (erro) {
        return naoCadastrado;
    }
    return naoCadastrado;
}

async function buscarUser() {
    const dados = await crud.get(nomeTabela);
    return dados;
}

async function removerUser(id) {
    const dados = await crud.remove(nomeTabela, id);
    return dados;
}

async function buscarUserId(id) {
    const dados = await crud.getById(nomeTabela, id);
    return dados;
}

async function login(dado = {CPF: "", Password: ""}) {
    console.log(dado);
    const dados = await crud.getWithFilter(nomeTabela, "CPF", "==", dado.CPF);
    console.log(dados[0]);
    if(dados[0].Password == dado.Password){
        return true;
    }
    return false;
}


module.exports = {
    cadastrarUser,
    buscarUser,
    removerUser,
    buscarUserId,
    login
}


