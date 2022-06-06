var apiKey: string;
//let apiKey;
var RequestToken: string;
let username: string;
let password: string;
var sessionId: string;
let list_Id: string | number;

let loginButton = document.getElementById("login-button")! as HTMLButtonElement;
let searchButton = document.getElementById(
  "search-button"
) as HTMLButtonElement;
let searchContainer = document.getElementById(
  "search-container"
) as HTMLInputElement;

loginButton.addEventListener("click", async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
});

searchButton.addEventListener("click", async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.innerHTML = "";
  }
  let Query = document.getElementById("search") as HTMLInputElement;
  var query = Query.value;
  let listaDeFilmes: any = await procurarFilme(query);
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
});

function preencherSenha() {
  let Password = document.getElementById("senha") as HTMLInputElement;
  password = Password.value;
  validateLoginButton();
  return password;
}

function preencherLogin() {
  let Username = document.getElementById("login") as HTMLInputElement;
  username = Username.value;
  validateLoginButton();
  return username;
}

function preencherApi() {
  let ApiKey = document.getElementById("api-key") as HTMLInputElement;
  apiKey = String(ApiKey.value);
  validateLoginButton();
  return apiKey;
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get({ url = "string", method = "", body = }) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
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
        request.setRequestHeader(
          "Content-Type",
          "application/json;charset=UTF-8"
        );
        body = JSON.stringify(body);
      }
      request.send(body); //error
    });
  }
}

async function procurarFilme(query: string) {
  query = encodeURI(query);
  console.log(query);
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET",
  });
  console.log(result);
  return result;
}

async function adicionarFilme(filmeId: string) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET",
  });
  console.log(result);
}

async function criarRequestToken() {
  let Request_Token: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET",
  });
  let RequestToken: string = String(Request_Token.request_token);

  console.log(RequestToken);
  return RequestToken;
}

async function logar() {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${RequestToken}`,
    },
  });

  console.log("logou!");
}

async function criarSessao() {
  let SessionId: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
    method: "POST",
    body: {
      request_token: `${RequestToken}`,
    },
  });
  sessionId = SessionId.session_id;
  console.log(sessionId);
  return sessionId;
}

// dando erro

async function criarLista(nomeDaLista: string, descricao: string) {
  let result: object | any = await HttpClient.get({
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
}

async function adicionarFilmeNaLista(filmeId: number, listaId: string) {
  let result: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId,
    },
  });
  console.log(result);
  return result;
}

async function pegarLista() {
  let result: any = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${list_Id}?api_key=${apiKey}&language=en-US`,
    method: "GET",
  });
  console.log(result);
  return result;
}


