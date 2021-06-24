// preloadGame scene
class Preloader extends Phaser.Scene{
    constructor(){
        super("Preloader");
    }
    preload(){
        this.registry.set('vidas', 3)
        this.load.audio("saltar", "./assets/musica_sonidos/saltar.wav")
        this.load.audio("fruta", "./assets/musica_sonidos/fruta.wav")
        this.load.audio("correr", "./assets/musica_sonidos/correr.mp3")
        this.load.audio("musicafondo", "./assets/musica_sonidos/Rabbit_Run.mp3")
        this.load.image("tiles","./assets/tiles/tiles.png")
        this.load.image("tiles2", "./assets/tiles/tiles2.png")
        this.load.image("moneda", "./assets/tiles/moneda.png")
        this.load.image("pinchos", "./assets/tiles/pinchos.png")
        this.load.image("pinchos1", "./assets/tiles/pinchos1.png")
        this.load.image("pinchos2", "./assets/tiles/pinchos2.png")
        this.load.image("pinchos3", "./assets/tiles/pinchos3.png")
        this.load.image("manzana", "./assets/tiles/manzana.png")
        this.load.image("banana", "./assets/tiles/banana.png")
        this.load.image("naranja", "./assets/tiles/naranja.png")
        this.load.image("tiles3", "./assets/tiles/tiles3.png")
        this.load.tilemapTiledJSON("nivel1", "./assets/json/nivel1.json")
        this.load.image("bg1", "./assets/images/background/1.png")
        this.load.image("bg2", "./assets/images/background/2.png")
        this.load.image("bg3", "./assets/images/background/3.png")
        this.load.image("bg4", "./assets/images/background/4.png")
        this.load.image("bg5", "./assets/images/background/5.png")
        this.load.spritesheet('dino', './assets/images/player/dino.png', { frameWidth: 24, frameHeight: 24 });
        this.load.image("meta", "./assets/images/background/meta.png")
        this.load.image("cielo", "./assets/images/background/cielo.jpg")
        this.load.image("cielo2", "./assets/images/background/cielo2.jpg")
        this.load.image("corazonlleno", "./assets/images/player/corazonlleno.png")
        this.load.image("corazonvacio", "./assets/images/player/corazonvacio.png")
        this.registry.set('agarrafruta', 0)
        this.load.spritesheet('dinonaranja', './assets/images/player/dinonaranja.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('dinomanzana', './assets/images/player/dinomanzana.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('dinobanana', './assets/images/player/dinobanana.png', { frameWidth: 24, frameHeight: 24 });
    }
    create(){

        this.scene.start("nivel1");

        //ANIMACIONES 
        //corre hacia la izquierda
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dino', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers('dinonaranja', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
   
        this.anims.create({
            key: 'right3',
            frames: this.anims.generateFrameNumbers('dinobanana', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right4',
            frames: this.anims.generateFrameNumbers('dinomanzana', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });


















    }
}


