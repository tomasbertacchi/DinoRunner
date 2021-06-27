let game;

let gameConfig = {
    type: Phaser.WEBGL,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 1024,
        height: 768,
      },
    scene: [Preloader,MainMenu,Tutorial,Nivel1,GameUI,Nivel2,GameUI2,Puntuacion,Creditos],

    scale: {
        zoom: 1
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 800 },
            debug: false,
        }
    }

    
    
}
var colliderplataformas;
var camara;
var cursors;
var player;
var plataformas;
var plataformas2;
var mapa;
var mapa2;
var tileset;
var final;
var gameOver;
var pinchos;
var powerup;
var monedaLayer;
var monedas;
var salto;
var pinchosObjects;
var meta;
var naranjas;
var naranjasLayer;
var manzanas;
var bananas;
var bananasLayer;
var manzanasLayer;
var spikes;
var spikes2;
var spikes3;
var fondo;
var playerSalta;
var cantidadSaltos;
var empezarTexto;
var pinchos1;
var pinchos2;
var pinchos3;
var velocidad;
var salto;
var velocidadPowerup;
var hielo;
var monedapowerup;
var agarraPowerup;
var velocidadHielo;
var puntuacionnivel1;
var puntuacionnivel2;
var portal;
var puntuacion1;
var puntuacion2;
var tiempoInicial;
var tiempoInicial2;
var vidas;
var vidas2;
var musicamenu;
var agarroPowerUp;
var arriba;
var spacebar;






game = new Phaser.Game(gameConfig);
window.focus();


