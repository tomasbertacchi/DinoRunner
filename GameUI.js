class GameUI extends Phaser.Scene{
    constructor(){
        super("ui");
    }


    create(){
        this.add.text(10, 16, 'Puntuacion: ', { font: '32px Arial', fill: '#ffe100' });
        this.puntuacion = this.add.text(200, 16, '0', { font: '32px Arial', fill: '#ffe100' });
        this.vidas = this.add.text(200, 48, '3', { font: '32px Arial', fill: '#ffe100' });
        this.add.text(10, 48, 'Vidas: ', { font: '32px Arial', fill: '#ffe100' });
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrafruta'){
                this.puntuacion.setText(data)
            }
            if (key === "vidas"){
                this.vidas.setText(data)
            }
        });
    
    }
}


