class Nivel1 extends Phaser.Scene{
    constructor(){
        super("nivel1");
    }

    create(){
        this.scene.run("ui")
        
        //sonidos y musica
        this.musica = this.sound.add("musicafondo",{
            volume: 0.1,
            loop: true
        });

        this.saltar = this.sound.add("saltar",{
            volume: 0.1,
            loop: false
        })
        this.musica.play();

        this.fruta = this.sound.add("fruta",{
            volume:0.3
        })

        //-------------------------------------------------

        // VARIABLES VARIAS :D
        gameOver = false;
        vidas = 3;
        puntuacionnivel1 = 0;
        tiempoInicial = 20;
        this.timedEvent = true;

        // BACKGROUND
        var background = this.add.image(430,400, "cielo")
        .setScrollFactor(0)

        // TEXTO INICIO
        empezarTexto = this.add.text (250 , 570, "5",{
            fontSize: 16
        })

        //creacion inputs
        cursors = this.input.keyboard.createCursorKeys();

        //meta
        meta = this.physics.add.staticGroup();
        meta.create(3850, 675, "meta")

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
            const pincho2 = spikes2.create(spikeObject2.x +8, spikeObject2.y -8, "pinchos2");
            pincho2.body.setSize(8, 16).setOffset(8, 0)   
        });
    
        //pincho hacia abajo
        spikes3 = this.physics.add.staticGroup()
        const spikeObjects3 = mapa.getObjectLayer('Spikes3')['objects'];
        spikeObjects3.forEach(spikeObject3 => {
            const pincho3 = spikes3.create(spikeObject3.x +8, spikeObject3.y -8, "pinchos3");
            pincho3.body.setSize(16, 8).setOffset(0, 0)   
        });

        //AGREGA PROPIEDAD DE COLISION A LAYER DE TILED CON LA PROPIEDAD COLLIDES ACTIVADA.
        plataformas.setCollisionByProperty({collides: true})

        //CAMARA
        camara = this.cameras.main;
        this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);

        //PLAYER
        player = this.physics.add.sprite(10, 750, 'dino');
        player.setScale(1)
                    //cambiamos el tamaño de hitbox del jugador
        player.setSize(10,16)
        player.setCollideWorldBounds(false);
                    //agregamos colliders
        this.physics.add.collider(player, plataformas)
        this.physics.add.collider(player, meta, this.llegarMeta, null, this)
        velocidad = 150;
        salto = -310;

      //COLLIDERS GENERALES
        this.physics.add.overlap(player, manzanas, this.agarrarManzana, null, this);
        this.physics.add.overlap(player, naranjas, this.agarrarNaranja, null, this);
        this.physics.add.overlap(player, bananas, this.agarrarBanana,null, this);
        this.physics.add.collider(player, spikes, this.hitPinchos,null,this)
        this.physics.add.collider(player, spikes2, this.hitPinchos,null,this)
        this.physics.add.collider(player, spikes3, this.hitPinchos,null,this)

        // timed event = llama cada 1 segundo la funcion onsecond, que resta el tiempo cada 1 segundo
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        this.comenzar = this.time.addEvent({ delay: 6000, callback: this.tocaPlataforma, callbackScope: this, loop: false });
        camara.setZoom(2)    

        //contador
        this.cambia4 = this.time.addEvent({ delay: 1000, callback: this.cambia4, callbackScope: this, loop: false });
        this.cambia3 = this.time.addEvent({ delay: 2000, callback: this.cambia3, callbackScope: this, loop: false });
        this.cambia2 = this.time.addEvent({ delay: 3000, callback: this.cambia2, callbackScope: this, loop: false });
        this.cambia1 = this.time.addEvent({ delay: 4000, callback: this.cambia1, callbackScope: this, loop: false });
        this.cambiaGO = this.time.addEvent({ delay: 5000, callback: this.cambiaGO, callbackScope: this, loop: false });
        this.romperTexto = this.time.addEvent({ delay: 6000, callback: this.romperTexto, callbackScope: this, loop: false });

        
    }
    
    update(){

        if (gameOver)
        {       
            return
        }

        if (gameOver)
        {       
            return
        }
        //SALTO JUGADOR. FLECHA ARRIBA + JUGADOR TOCANDO SUELO.
        if(cursors.up.isDown && player.body.blocked.down){
            this.playerSalta();
        }
    
        if (vidas == 0){
            this.gameOver();
        }

        camara.centerOn(player.x, player.y)
        
        musicamenu.pause();
    
    }

    tocaPlataforma(){
        player.setVelocityX(velocidad);
        player.anims.play("right", true);
    }

    
    cambia4(){
        empezarTexto.setText("4");
        console.log("4")
    }
    cambia3(){
        empezarTexto.setText("3");
        console.log("3")
    }
    cambia2(){
        empezarTexto.setText("2");
        console.log("2")
    }
    cambia1(){
        empezarTexto.setText("1");
        console.log("1")
    }
    cambiaGO(){
        empezarTexto.setText("GO!");
    }
    romperTexto(){
        empezarTexto.setVisible(false);
    }

    playerSalta(){
        player.setVelocityY(salto)
        this.saltar.play()
    }

    hitPinchos(player, spikes){
        vidas --;
        this.registry.set("vidas", vidas)
        player.setX(10)
        console.log("pierde vida")
        player.setVelocityX(velocidad)
    }

    gameOver() {   
        gameOver = true;
        player.setTint(0xff0000);
        this.physics.pause();
        player.setX(1024/2);
        player.setY(400);
        player.anims.stop("right", true);
        this.musica.stop();
        this.timedEvent.paused = true;
        this.scene.stop("ui")

        var textoPerder = this.add.text(game.width/2,game.height/2,'Perdiste', { fontFamily: 'Arial', fontSize: 64, color: 'red' });
        Phaser.Display.Align.In.Center(textoPerder, this.add.zone(1024/2, 768/2-100, 1024, 768));   
        // var botonReintentar = this.add.image(700, 550, 'boton_reintentar')
        // botonReintentar.setInteractive()
        // botonReintentar.setScale(0.2);
        // botonReintentar.on('pointerdown', () => this.scene.start("nivel1"));

        var botonSalir = this.add.image(330, 550, 'boton_salir')
        botonSalir.setInteractive()
        botonSalir.setScale(0.2);
        botonSalir.on('pointerdown', () => this.scene.start("menu"));
    }

    llegarMeta(player, meta){
        console.log("ganaste")
        this.physics.pause();
        player.disableBody();
        player.setX(1024/2);
        player.setY(400);
        player.anims.stop("right", true);
        this.musica.stop();
        this.scene.stop("ui")
        this.timedEvent.paused = true;
        var textoGanar = this.add.text(game.width/2,game.height/2,'Ganaste', { fontFamily: 'Arial', fontSize: 64, color: 'green' });
        Phaser.Display.Align.In.Center(textoGanar, this.add.zone(1024/2, 768/2-100, 1024, 768));   
        var botonSiguiente = this.add.image(700, 550, 'boton_siguiente')
        botonSiguiente.setInteractive()
        botonSiguiente.setScale(0.2);
        botonSiguiente.on('pointerdown', () => this.scene.start("nivel2"));

        var botonSalir = this.add.image(330, 550, 'boton_salir')
        botonSalir.setInteractive()
        botonSalir.setScale(0.2);
        botonSalir.on('pointerdown', () => this.scene.start("menu"));
    }

    // FUNCIONES AL AGARRAR FRUTAS
    agarrarManzana(player, manzanas){
        manzanas.destroy(manzanas.x, manzanas.y)
        puntuacionnivel1 += 5;
        this.registry.set('agarrafruta', puntuacionnivel1);
        this.fruta.play();
        tiempoInicial += 3;
        return false;
    }
    agarrarNaranja(player, naranjas){
        naranjas.destroy(naranjas.x, naranjas.y)
        puntuacionnivel1 += 2;
        this.registry.set('agarrafruta', puntuacionnivel1);
        this.fruta.play();
        tiempoInicial += 2;
        return false;
    }
    agarrarBanana(player, bananas){
        bananas.destroy(bananas.x, bananas.y)
        puntuacionnivel1 += 1;
        this.registry.set('agarrafruta', puntuacionnivel1);
        this.fruta.play();
        tiempoInicial += 1;
        return false;
    }


    onSecond() {
            this.registry.set("tiempo", tiempoInicial)
            tiempoInicial = tiempoInicial- 1; // One second
            if (tiempoInicial == 0) {
                this.gameOver();
            }            
        

    }

}
