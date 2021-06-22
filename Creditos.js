class Creditos extends Phaser.Scene{
    constructor(){
        super("creditos");
    }

    preload(){
        this.load.image("creditos", "/assets/images/creditos/creditos.jpg")

    }
    create(){
        var creditos = this.add.image(0,0,"creditos")
    }

    update(){

    }
}