class Puntuacion extends Phaser.Scene{
    constructor(){
        super("puntuacion");
    }
    create(){
        this.add.image(0,0, "puntuacion").setOrigin(0,0)
        var puntuaciontotal = puntuacionnivel2 + puntuacionnivel1;
        var puntos = this.add.text(100, 768/2, "Puntuacion total: ",{fontSize: 64, fill: "black"})
        var puntos2 = this.add.text(800, 768/2, puntuaciontotal,{fontSize: 64, fill: "black"})
        const boton_volver = this.add.image(220, 700, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start('menu'))
        .setScale(0.3)
        .setOrigin(0.5,0.5);
    }

}