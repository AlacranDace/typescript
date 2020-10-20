"use strict";
(function () {
    // Uso de Let y Const
    var nombre = 'Daniel Cerezo';
    var edad = 23;
    //En el ES6 si una propiedad se llama igual que la variable se puede quitar lo de después de los dos puntos
    /*let PERSONAJE = {
      nombre: nombre,
      edad: edad
    };*/
    var PERSONAJE = { nombre: nombre, edad: edad };
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    /*function resultadoDoble( a, b ){
      return (a + b) * 2
    }*/
    var resultadoDobles = function (a, b) { return (a + b) * 2; };
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma) {
        if (arma === void 0) { arma = "arco"; }
        var mensaje = "";
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma + ";"; //nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + " tiene un " + poder; //nombre + ' tiene un ' + poder
        }
    }
    ;
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            var _this = this;
            this.base = base;
            this.altura = altura;
            this.calculaAreaF = function () { return _this.base * _this.altura; };
        }
        Rectangulo.prototype.calculaArea = function () {
            return this.altura * this.base;
        };
        return Rectangulo;
    }());
})();
