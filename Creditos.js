class Creditos extends Phaser.Scene{
    constructor(){
        super("creditos");
    }

    create(){
        var creditos = this.add.image(0,0,"creditos").setOrigin(0,0);

        const boton_volver = this.add.image(220, 700, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start('menu'))
        .setScale(0.5)
        .setOrigin(0.5,0.5);
    }


    update(){
        musicamenu.pause();
    }    
}