/**
 * 1 
 */
function checaIdade(idade) {
    return new Promise( function(resolve, reject) {

        setTimeout(function(){
                        if (idade > 18) {
                            resolve(". > 18");                
                        } else {
                            reject(". <= 18");
                        }
                    },
                  2000
        );
        setTimeout(function(){console.log("Passou 2 seg!");}, 2000);

    });
}

checaIdade(20)
    .then(function(response) {
        console.log("Maior que 18" + response);
    })
    .catch(function(error) {
        console.log("Menor que 18" + error);
    })

/**
 * 2 
 */
// var appElement = document.getElementById("app");
var listElement = document.querySelector("ul");
var inputElement = document.querySelector("input[name=user]");
var carregandoElement = document.createElement("il");
var erroElement = document.createElement("div");

carregandoElement.innerHTML = "Carregando...";
erroElement.innerHTML = "Erro 404: Usuário não encontrado."

function buscarRepos() {
    listElement.innerHTML = '';
    listElement.appendChild(carregandoElement);
    

    var username = inputElement.value;
    var url = 'https://api.github.com/users/' + username + '/repos';

    axios.get(url)
        .then(function(response){
            listElement.innerHTML = '';
            for(var repo of response.data) {
                var repoElement = document.createElement('li');
                var repoText = document.createTextNode(repo.name)
                repoElement.appendChild(repoText);
                listElement.appendChild(repoElement);
                
            }
        })
        .catch(function(error){
            /**
             * 3
             */
            listElement.innerHTML = '';
            listElement.appendChild(erroElement);
            // appElement.appendChild(erroElement);

        });
}




document.querySelector("button").onclick = buscarRepos;