class Tutorial extends Phaser.Scene{
    constructor(){
        super("tutorial");
    }
    create (){
        
        var tutorial = this.add.image(0,0, "escena_tutorial").setOrigin(0,0);

        const boton_comenzar = this.add.image(800, 700, "boton_empezar")
        .setInteractive()
        .on('pointerdown', () => this.scene.start('nivel1'))
        .setScale(0.5)
        .setOrigin(0.5,0.5);

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