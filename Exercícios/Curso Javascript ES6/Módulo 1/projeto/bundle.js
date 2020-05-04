"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 1
 */
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin || false; // não tem definição dessa propriedade em Usuario, esse OU evita que o método retorne undefined
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123'); // console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

/**
 * 2
 */

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (valor) {
  return valor.idade;
}); // console.log(idades);

var item22 = usuarios.filter(function (valor) {
  return valor.empresa == "Rocketseat" && valor.idade > 18;
}); // console.log(item22);

var item23 = usuarios.find(function (valor) {
  return valor.empresa == 'Google';
}); // console.log(item23);

var item24 = usuarios.map(function (valor) {
  return _objectSpread(_objectSpread({}, valor), {}, {
    idade: valor.idade * 2
  });
}).filter(function (valor) {
  return valor.idade < 50;
})
/* .map(function(valor) {
          return { ...valor, idade: valor.idade * 2 };
})  */
; // console.log(item24);

/**
 * 3
 */
// 3.1

var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (item) {
  return item + 10;
}); // console.log(arr2);
// 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 50
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
}; // console.log(mostraIdade(usuario));
// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade }) ;
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// 3.4


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // console.log(promise);

/**
 * 4
 */
// 4.1


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
// 4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
/**
 * 5
 */
// 5.1

var arr3 = [1, 2, 3, 4, 5, 6];
var x = arr3[0],
    y = arr3.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
// 5.2

var usuario_5 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2_5 = _objectSpread(_objectSpread({}, usuario_5), {}, {
  nome: "Gabriel"
});

var usuario3_5 = _objectSpread(_objectSpread({}, usuario_5), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario_5.endereco), {}, {
    cidade: "Lontras"
  })
});

console.log(usuario2_5, usuario3_5);
/**
 * 6
 */

var usuario_6 = 'Diego';
var idade_6 = 23; // console.log('O usuário ' + usuario_6 + ' possui ' + idade_6 + ' anos');

console.log("O usu\xE1rio ".concat(usuario_6, " possui ").concat(idade_6, " anos"));
/**
 * 7
 */

var nome_7 = 'Diego';
var idade_7 = 23;
var usuario_7 = {
  nome_7: nome_7,
  idade_7: idade_7,
  cidade: 'Rio do Sul'
};
console.log(usuario_7);
