class GameUI extends Phaser.Scene{
    constructor(){
        super("ui");
    }


    create(){
        this.add.text(790, 16, 'Puntuacion: ', { font: '32px Arial', fill: 'black' });
        puntuacion1 = this.add.text(970, 18, '0', { font: '32px Arial', fill: 'black' });
        this.vidas = this.add.text(110, 18, '3', { font: '32px Arial', fill: 'black' });
        this.add.text(10, 16, 'Vidas: ', { font: '32px Arial', fill: 'black' });
        this.tiempoInicial = this.add.text(520, 16, '20', { font: '32px Arial', fill: 'black' });
        this.add.text(400, 16, 'Tiempo: ', { font: '32px Arial', fill: 'black' });
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrafruta'){
                puntuacion1.setText(data)
            }
            if (key === "vidas"){
                this.vidas.setText(data)
            }
            if (key === "tiempo"){
                this.tiempoInicial.setText(data);
            }            
        });
    
    }
}


