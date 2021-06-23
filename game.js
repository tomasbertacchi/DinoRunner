let game;

let gameConfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 1024,
        height: 768,
        backgroundColor: '#351f1b'
      },
    scene: [Preloader, Nivel1,GameUI, Creditos],

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
var mapa;
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
var timeText;
var timedEvent;
var initialTime = 30;
var playerSalta;
var cantidadSaltos = 0;
var empezarTexto;







game = new Phaser.Game(gameConfig);
window.focus();


