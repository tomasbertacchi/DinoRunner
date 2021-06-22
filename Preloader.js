// preloadGame scene
class Preloader extends Phaser.Scene{
    constructor(){
        super("Preloader");
    }
    preload(){
        this.load.image("tiles","/assets/tiles/tiles.png")
        this.load.image("tiles2", "/assets/tiles/tiles2.png")
        this.load.image("moneda", "/assets/tiles/moneda.png")
        this.load.image("pinchos", "/assets/tiles/pinchos.png")
        this.load.image("pinchos1", "/assets/tiles/pinchos1.png")
        this.load.image("pinchos2", "/assets/tiles/pinchos2.png")
        this.load.image("pinchos3", "/assets/tiles/pinchos3.png")
        this.load.image("manzana", "/assets/tiles/manzana.png")
        this.load.image("banana", "/assets/tiles/banana.png")
        this.load.image("naranja", "/assets/tiles/naranja.png")
        this.load.image("tiles3", "/assets/tiles/tiles3.png")
        this.load.tilemapTiledJSON("nivel1", "/assets/json/nivel1.json")
        this.load.image("bg1", "/assets/images/background/1.png")
        this.load.image("bg2", "/assets/images/background/2.png")
        this.load.image("bg3", "/assets/images/background/3.png")
        this.load.image("bg4", "/assets/images/background/4.png")
        this.load.image("bg5", "/assets/images/background/5.png")
        this.load.spritesheet('dino', 'assets/images/player/dino.png', { frameWidth: 24, frameHeight: 24 });
        this.load.image("meta", "/assets/images/background/meta.png")
        this.load.image("cielo", "/assets/images/background/cielo.jpg")
        this.load.image("cielo2", "/assets/images/background/cielo2.jpg")
  
    }
    create(){

        this.scene.start("nivel1");
    }
}

