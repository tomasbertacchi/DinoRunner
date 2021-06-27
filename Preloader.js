// preloadGame scene
class Preloader extends Phaser.Scene{
    constructor(){
        super("Preloader");
    }
    preload(){
        this.registry.set('vidas', 3);
        this.registry.set('vidas2', 3);
        this.load.audio("saltar", "./assets/musica_sonidos/saltar.wav");
        this.load.audio("fruta", "./assets/musica_sonidos/fruta.wav");
        this.load.audio("musicafondo", "./assets/musica_sonidos/Rabbit_Run.mp3");
        this.load.audio("musicamenu", "./assets/musica_sonidos/musica_menu.mp3");
        this.load.image("tiles","./assets/tiles/tiles.png");
        this.load.image("tiles2", "./assets/tiles/tiles2.png");
        this.load.image("moneda2", "./assets/tiles/moneda2.png");
        this.load.image("pinchos", "./assets/tiles/pinchos.png");
        this.load.image("pinchos1", "./assets/tiles/pinchos1.png");
        this.load.image("pinchos2", "./assets/tiles/pinchos2.png");
        this.load.image("pinchos3", "./assets/tiles/pinchos3.png");
        this.load.image("manzana", "./assets/tiles/manzana.png");
        this.load.image("banana", "./assets/tiles/banana.png");
        this.load.image("naranja", "./assets/tiles/naranja.png");
        this.load.image("tiles3", "./assets/tiles/tiles3.png");
        this.load.image("tiles4", "./assets/tiles/tiles4.png");
        this.load.image("tiles5", "./assets/tiles/tiles5.png");
        this.load.tilemapTiledJSON("nivel1", "./assets/json/nivel1.json");
        this.load.tilemapTiledJSON("nivel2", "./assets/json/nivel2.json");
        this.load.spritesheet('dino', './assets/images/player/dino.png', { frameWidth: 24, frameHeight: 24 });
        this.load.image("meta", "./assets/images/background/meta.png");
        this.load.image("cielo", "./assets/images/background/cielo.jpg");
        this.load.image("corazonlleno", "./assets/images/player/corazonlleno.png");
        this.load.image("corazonvacio", "./assets/images/player/corazonvacio.png");
        this.registry.set('agarrafruta', 0);
        this.registry.set('agarrafruta2', 0);
        this.load.spritesheet('dinonaranja', './assets/images/player/dinonaranja.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('dinomanzana', './assets/images/player/dinomanzana.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('dinobanana', './assets/images/player/dinobanana.png', { frameWidth: 24, frameHeight: 24 });
        this.load.image("menu", "./assets/images/background/cielo2.png");
        this.load.image("boton_jugar", "./assets/images/GUI/boton_jugar.png");
        this.load.image("boton_creditos", "./assets/images/GUI/boton_creditos.png");
        this.load.image("escena_tutorial", "./assets/images/GUI/tutorial.png");
        this.load.image("boton_empezar", "./assets/images/GUI/boton_empezar.png");
        this.load.image("boton_volver", "./assets/images/GUI/boton_volver.png");
        this.load.image("puntuacion", "./assets/images/background/puntuacion.png");
        this.load.image("boton_siguiente", "./assets/images/GUI/boton_siguiente.png");
        this.load.image("boton_salir", "./assets/images/GUI/boton_salir.png");
        this.load.image("boton_reintentar", "./assets/images/GUI/boton_reintentar.png");
        this.load.image("boton_tutorial", "./assets/images/GUI/boton_tutorial.png");
        this.load.image("portal", "./assets/images/background/portal.png");
        this.load.image("creditos", "./assets/images/GUI/creditos.png");
    }
    create(){
        this.scene.start("menu");

        //ANIMACIONES 
        //corre hacia la izquierda
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dino', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
    








    }
}


