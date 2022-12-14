let game;

let gameConfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: "thegame",
        width: 1024,
        height: 768,
        zoom: 1

      },
    scene: [Preloader,MainMenu,Tutorial,Nivel1,GameUI,Nivel2,GameUI2,Puntuacion,Creditos],

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 800 },
            debug: true,
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
var moneda;
var enemigo;
var enemigo2;
var enemigo3;
var plataformaborde;
var enemigoderecha1;
var enemigoderecha2;
var enemigoderecha3;
var choqueLayer;
var moneda2;
var moneda3;







game = new Phaser.Game(gameConfig);
window.focus();


