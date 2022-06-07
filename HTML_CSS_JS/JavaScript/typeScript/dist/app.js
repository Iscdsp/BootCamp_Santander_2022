"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var apiKey;
//let apiKey;
var RequestToken;
let username;
let password;
var sessionId;
let list_Id;
let loginButton = document.getElementById("login-button");
let searchButton = document.getElementById("search-button");
let searchContainer = document.getElementById("search-container");
loginButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield criarRequestToken();
    yield logar();
    yield criarSessao();
}));
searchButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let lista = document.getElementById("lista");
    if (lista) {
        lista.innerHTML = "";
    }
    let Query = document.getElementById("search");
    var query = Query.value;
    let listaDeFilmes = yield procurarFilme(query);
    let ListaFilmes = listaDeFilmes.value;
    let ul = document.createElement("ul");
    ul.id = "lista";
    for (const item of ListaFilmes) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.original_title));
        ul.appendChild(li);
    }
    console.log(listaDeFilmes);
    searchContainer.appendChild(ul);
}));
function preencherSenha() {
    let Password = document.getElementById("senha");
    password = Password.value;
    validateLoginButton();
    return password;
}
function preencherLogin() {
    let Username = document.getElementById("login");
    username = Username.value;
    validateLoginButton();
    return username;
}
function preencherApi() {
    let ApiKey = document.getElementById("api-key");
    apiKey = String(ApiKey.value);
    validateLoginButton();
    return apiKey;
}
function validateLoginButton() {
    if (password && username && apiKey) {
        loginButton.disabled = false;
    }
    else {
        loginButton.disabled = true;
    }
}
class HttpClient {
    static get({ url = "string", method = "string", body = {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                request.open(method, url, true);
                request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
                        resolve(JSON.parse(request.responseText));
                    }
                    else {
                        reject({
                            status: request.status,
                            statusText: request.statusText,
                        });
                    }
                };
                request.onerror = () => {
                    reject({
                        status: request.status,
                        statusText: request.statusText,
                    });
                };
                if (body) {
                    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                    body = JSON.stringify(body);
                }
                request.send(body); //error
            });
        });
    }
}
function procurarFilme(query) {
    return __awaiter(this, void 0, void 0, function* () {
        query = encodeURI(query);
        console.log(query);
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
            method: "GET",
        });
        console.log(result);
        return result;
    });
}
function adicionarFilme(filmeId) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
            method: "GET",
        });
        console.log(result);
    });
}
function criarRequestToken() {
    return __awaiter(this, void 0, void 0, function* () {
        let Request_Token = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
            method: "GET",
        });
        let RequestToken = Request_Token.request_token;
        console.log(RequestToken);
        return RequestToken;
    });
}
function logar() {
    return __awaiter(this, void 0, void 0, function* () {
        yield HttpClient.get({
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
            method: "POST",
            body: {
                username: `${username}`,
                password: `${password}`,
                request_token: `${RequestToken}`,
            },
        });
        return console.log("logou!");
    });
}
function criarSessao() {
    return __awaiter(this, void 0, void 0, function* () {
        let SessionId = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
            method: "POST",
            body: {
                request_token: `${RequestToken}`,
            },
        });
        sessionId = SessionId.session_id;
        console.log(sessionId);
        return sessionId;
    });
}
// dando erro
function criarLista(nomeDaLista, descricao) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
            method: "POST",
            body: {
                name: nomeDaLista,
                description: descricao,
                language: "pt-br",
            },
        });
        list_Id = result.listId;
        console.log(list_Id);
        return list_Id;
    });
}
function adicionarFilmeNaLista(filmeId, listaId) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
            method: "POST",
            body: {
                media_id: filmeId,
            },
        });
        console.log(result);
        return result;
    });
}
function pegarLista() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield HttpClient.get({
            url: `https://api.themoviedb.org/3/list/${list_Id}?api_key=${apiKey}&language=en-US`,
            method: "GET",
        });
        console.log(result);
        return result;
    });
}
