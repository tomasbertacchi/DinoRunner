let game;

let gameConfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 2048,
        height: 768,
        backgroundColor: '#351f1b'
      },
    scene: [Preloader, Nivel1, Creditos],

    scale: {
        zoom: 1
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 800 },
            debug: true
        }
    }

    
    
}
var colliderplataformas;
var camara;
var cursors;
var player;
var plataformas;
var mapa;
var tileset;
var final;
var gameOver;
var pinchos;
var powerup;
var monedaLayer;
var monedas;
var puntuacion = 0;
var textoPuntuacion;
var salto;
var pinchosObjects;
var vidas = 3;
var textoVidas;
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




game = new Phaser.Game(gameConfig);
window.focus();


