/**
 * 1
 */
class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin || false ; // não tem definição dessa propriedade em Usuario, esse OU evita que o método retorne undefined
    }
}

class Admin extends Usuario {
    constructor(email,senha){
        super(email,senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

/**
 * 2
 */
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map( (valor) => valor.idade );

// console.log(idades);

const item22 = usuarios.filter( (valor) => valor.empresa == "Rocketseat" && valor.idade > 18 );
// console.log(item22);

const item23 = usuarios.find( (valor) => valor.empresa == 'Google');
// console.log(item23);

const item24 = usuarios.map(function(valor) {
                            return { ...valor, idade: valor.idade * 2 };
                     }).filter(function(valor) {
                            return valor.idade < 50;
                    })/* .map(function(valor) {
                                return { ...valor, idade: valor.idade * 2 };
                     })  */;
// console.log(item24);

/**
 * 3
 */
// 3.1
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map( (item) => item + 10 );

// console.log(arr2);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 50 };
const mostraIdade = usuario => usuario.idade ;

// console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade }) ;

// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise( (resolve, reject) => resolve() ) ;

// console.log(promise);

/**
 * 4
 */
// 4.1
 const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade , estado } } = empresa ;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
function mostraInfo( { nome, idade } ) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

/**
 * 5
 */
// 5.1
const arr3 = [1, 2, 3, 4, 5, 6];

const [x,...y] = arr3;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.2
const usuario_5 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2_5 = {...usuario_5, nome: "Gabriel"};

const usuario3_5 = {...usuario_5, endereco: { ...usuario_5.endereco, cidade: "Lontras" } };

console.log(usuario2_5, usuario3_5);

/**
 * 6
 */
const usuario_6 = 'Diego';
const idade_6 = 23;
// console.log('O usuário ' + usuario_6 + ' possui ' + idade_6 + ' anos');
console.log(`O usuário ${usuario_6} possui ${idade_6} anos`);

/**
 * 7
 */
const nome_7 = 'Diego';
const idade_7 = 23;
const usuario_7 = {
    nome_7,
    idade_7,
    cidade: 'Rio do Sul',
};
console.log(usuario_7);