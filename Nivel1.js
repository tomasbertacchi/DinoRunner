// playGame scene
class Nivel1 extends Phaser.Scene{
    constructor(){
        super("nivel1");
    }

    create(){
        this.scene.run("ui")
        
        //sonidos y musica
        this.musica = this.sound.add("musicafondo",{
            volume: 0.05,
            loop: true
        });

        this.correr = this.sound.add("correr",{
            volume: 1,
            loop: true
        })

        this.saltar = this.sound.add("saltar",{
            volume: 0.5,
            loop: false
        })
        this.musica.play();

        this.fruta = this.sound.add("fruta",{
            volume:0.3
        })

        //-------------------------------------------------

        // VARIABLES VARIAS :D
        gameOver = false;
        this.vidas = 3;
        this.puntuacion = 0;

        // BACKGROUND
        var background = this.add.image(430,400, "cielo")
        .setScrollFactor(0)

        // TEXTO INICIO
        empezarTexto = this.add.text (20 , 650, "Press right key to start",{
            fontSize: 16
        })

        //creacion inputs
        cursors = this.input.keyboard.createCursorKeys();

        //meta
        meta = this.physics.add.staticGroup();
        meta.create(3950, 670, "meta")


        //MAPA
        mapa = this.make.tilemap({key: "nivel1"})
        const tilemap = mapa.addTilesetImage("tiles", "tiles")
        const tilemap2 = mapa.addTilesetImage("tiles2", "tiles2")
        const tilemap3 = mapa.addTilesetImage("tiles3", "tiles3")

        //LAYER DE TILED 
        plataformas = mapa.createStaticLayer("plataformas", tilemap3)
        fondo = mapa.createStaticLayer("fondo", tilemap3)

        //LAYER DE OBJETOS DE TILED
        naranjasLayer = mapa.getObjectLayer("naranja")["objects"]
        bananasLayer = mapa.getObjectLayer("banana")["objects"]
        manzanasLayer = mapa.getObjectLayer("manzana")["objects"]

        // //frutas
        naranjas = this.physics.add.staticGroup()
        manzanas = this.physics.add.staticGroup()
        bananas = this.physics.add.staticGroup()

        //CARGAR OBJETOS NARANJAS
        naranjasLayer.forEach(naranjaObject => {
            let naranjas2 = naranjas.create(naranjaObject.x, naranjaObject.y, "naranja"); 
            naranjas2.setScale(naranjaObject.width/16, naranjaObject.height/16); 
            naranjas2.setOrigin(0.5); 
            naranjas2.body.width = naranjaObject.width; 
            naranjas2.body.height = naranjaObject.height; 
        });
        //CARGAR OBJETOS MANZANAS
        manzanasLayer.forEach(manzanaObject => {
            let manzanas2 = manzanas.create(manzanaObject.x, manzanaObject.y, "manzana"); 
            manzanas2.setScale(manzanaObject.width/16, manzanaObject.height/16); 
            manzanas2.setOrigin(0.5); 
            manzanas2.body.width = manzanaObject.width; 
            manzanas2.body.height = manzanaObject.height; 
        });

        //CARGAR OBJETOS BANANAS
        bananasLayer.forEach(bananaObject => {
            let bananas2 = bananas.create(bananaObject.x, bananaObject.y, "banana"); 
            bananas2.setScale(bananaObject.width/16, bananaObject.height/16); 
            bananas2.setOrigin(0.5); 
            bananas2.body.width = bananaObject.width; 
            bananas2.body.height = bananaObject.height; 
        });

        //pinchos hacia arriba
        spikes = this.physics.add.staticGroup()
            const spikeObjects = mapa.getObjectLayer('Spikes')['objects'];
            spikeObjects.forEach(spikeObject => {
            const pincho = spikes.create(spikeObject.x +8, spikeObject.y -8, "pinchos1");
            pincho.body.setSize(16, 8).setOffset(0, 8)
        });

        //pinchos hacia izquierda
        spikes2 = this.physics.add.staticGroup()
        const spikeObjects2 = mapa.getObjectLayer('Spikes2')['objects'];
        spikeObjects2.forEach(spikeObject2 => {
            const pincho2 = spikes.create(spikeObject2.x +8, spikeObject2.y -8, "pinchos2");
            pincho2.body.setSize(8, 16).setOffset(8, 0)   
        });
    
        //pincho hacia abajo
        spikes3 = this.physics.add.staticGroup()
        const spikeObjects3 = mapa.getObjectLayer('Spikes3')['objects'];
        spikeObjects3.forEach(spikeObject3 => {
            const pincho3 = spikes.create(spikeObject3.x +8, spikeObject3.y -8, "pinchos3");
            pincho3.body.setSize(16, 8).setOffset(0, 0)   
        });

        //AGREGA PROPIEDAD DE COLISION A LAYER DE TILED CON LA PROPIEDAD COLLIDES ACTIVADA.
        plataformas.setCollisionByProperty({collides: true})

        //CAMARA
        camara = this.cameras.main;
        this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);


        //ANIMACIONES
        //corre hacia la izquierda
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dino', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
        // SALTO
        this.anims.create({
            key: 'salto',
            frames: this.anims.generateFrameNumbers('dino', { start: 16}),
            frameRate: 1,
            repeat: -1
        });

        //PLAYER
        player = this.physics.add.sprite(10, 750, 'dino');
        player.setScale(1)
        //cambiamos el tamaño de hitbox del jugador
        player.setSize(10,16)
        player.setCollideWorldBounds(false);
        //agregamos colliders
        this.physics.add.collider(player, plataformas)
        this.physics.add.collider(player, meta, this.llegarMeta, null, this)

      //COLLIDERS GENERALES
        this.physics.add.overlap(player, manzanas, this.agarrarManzana, null, this);
        this.physics.add.overlap(player, naranjas, this.agarrarNaranja, null, this);
        this.physics.add.overlap(player, bananas, this.agarrarBanana,null, this);
        this.physics.add.collider(player, spikes, this.hitPinchos, null, this)
        this.physics.add.collider(player, spikes2, this.hitPinchos, null, this)
        this.physics.add.collider(player, spikes3, this.hitPinchos, null, this)
      
    }
    
    update(){
        if (gameOver)
        {       
            return
        }

        if (cursors.right.isDown){
            this.empiezaCorrer()
            empezarTexto.setVisible(false)
        }

        const isJumpJustDown = Phaser.Input.Keyboard.JustDown(cursors.up)
        const tocaSuelo = player.body.blocked.down

        //SALTO JUGADOR. FLECHA ARRIBA + JUGADOR TOCANDO SUELO.
        if(cursors.up.isDown && tocaSuelo)
            player.setVelocityY(-300)
            cantidadSaltos ++;
        if(tocaSuelo && !isJumpJustDown){
            cantidadSaltos = 0;
        }
        if (this.vidas == 0){
            this.gameOver();
        }
        // camara centrada en jugador
        camara.centerOn(player.x, player.y)
        camara.setZoom(2)    

    }

    empiezaCorrer (){
        player.setVelocityX(150)
        player.anims.play("right", true)
    }

    hitPinchos(player, spikes){
        this.vidas --;
        this.registry.set("vidas", this.vidas)
        player.setX(10)
        player.setY(720)
        console.log("pierde vida")
    }

    gameOver() {   
        gameOver = true;
        player.setTint(0xff0000);
        player.disableBody(true);
        this.physics.pause();
        player.setX(1024/2);
        player.setY(768/2 - 100);
        player.anims.stop("right", true);
        this.musica.stop();
        this.scene.pause("ui")

        var gameOverButton = this.add.text(game.width/2, game.height/2, 'Perdiste', { fontFamily: 'Arial', fontSize: 70, color: '#ff0000' })
        gameOverButton.setInteractive()
        gameOverButton.on('pointerdown', () => this.scene.start('creditos'));
        Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(1024/2, 768/2, 1024, 768));    
    }


    // A IMPLEMETAR IDEA PORTAL

    llegarMeta(player, meta){
        console.log("ganaste")
        this.physics.pause();
        player.disableBody();
        player.anims.stop("right", true);
        player.setX(1024/2);
        player.setY(768/2 - 100);
        this.musica.stop();
        this.scene.pause("ui")

        var botonGanar = this.add.text(1024/2, 768/2, 'Ganaste', { fontFamily: 'Arial', fontSize: 70, color: 'green' })
        botonGanar.setInteractive()
        botonGanar.on('pointerdown', () => this.scene.start('creditos'));
        Phaser.Display.Align.In.Center(botonGanar, this.add.zone(1024/2, 768/2, 1024, 768));    
    }

    agarrarManzana(player, manzanas){
        manzanas.destroy(manzanas.x, manzanas.y)
        this.puntuacion += 2
        player.anims.play("right4")
        //scoreText.setText('' + score);
        this.registry.set('agarrafruta', this.puntuacion);
        this.fruta.play();
        return false;
    }

    agarrarNaranja(player, naranjas){
        naranjas.destroy(naranjas.x, naranjas.y)
        this.puntuacion += 2
        player.anims.play("right2")
        //scoreText.setText('' + score);
        this.registry.set('agarrafruta', this.puntuacion);
        this.fruta.play();
        return false;
    
    }

    agarrarBanana(player, bananas){
        bananas.destroy(bananas.x, bananas.y)
        this.puntuacion += 1
        player.anims.play("right3")
        //scoreText.setText('' + score);
        this.registry.set('agarrafruta', this.puntuacion);
        this.fruta.play();
        return false;
    }


    onSecond() {
        if (! gameOver)
        {       
            initialTime = initialTime - 1; // One second
            timeText.setText('Tiempo: ' + initialTime);
            if (initialTime == 0) {
                timedEvent.paused = true;
                this.gameOver()
            }            
        }

    }

}
