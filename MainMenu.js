class MainMenu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    create (){
        musicamenu = this.sound.add("musicamenu",{
            volume: 0.5,
            loop: true
        });

        musicamenu.play();

        const menu = this.add.image(0,0, "menu").setOrigin(0,0);
        const boton_menu = this.add.image(500, 260, "boton_jugar")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("nivel1"))
        .setScale(0.5)
        .setOrigin(0.5,0.5);

        const boton_tutorial = this.add.image(500, 430, "boton_tutorial")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("tutorial"))
        .setScale(0.5)
        .setOrigin(0.5,0.5);

        const boton_creditos = this.add.image(500, 600, "boton_creditos")
        .setInteractive()
        .on('pointerdown', () => this.scene.start('creditos'))
        .setScale(0.5)
        .setOrigin(0.5,0.5);
        
    }














}
