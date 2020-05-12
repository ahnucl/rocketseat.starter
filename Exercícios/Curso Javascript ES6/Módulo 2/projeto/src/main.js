// 1
// import ClasseUsuario from './function';

// ClasseUsuario.info();

// 2
// import { idade } from './function';
// console.log(idade)

// 3
import ClasseUsuario, { idade as IdadeUsuario } from './function';

console.log('idade com outro nome: ' + IdadeUsuario);
ClasseUsuario.info();
