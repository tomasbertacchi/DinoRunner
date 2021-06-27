class Nivel2 extends Phaser.Scene{
    constructor(){
        super("nivel2");
    }

    preload(){

    }
    create(){
        this.scene.run("ui2");
        var background = this.add.image(430,400, "cielo")
        .setScrollFactor(0);

        // power up
        monedapowerup = this.physics.add.group({
            key: "moneda2",
            setXY: {
                x: 2350,
                y: 100
            }
        });

        //variables varias
        gameOver = false;
        vidas2 = 3;
        puntuacionnivel2 = 0;
        tiempoInicial2 = 20;
        this.timedEvent = true;
        this.powerup = 0;
        velocidadPowerup = 100;
        agarraPowerup = false;
        velocidadHielo= 250;

        //    
        meta = this.physics.add.staticGroup();
        meta.create(3900, 686, "meta")

        portal = this.physics.add.staticGroup();
        portal.create(2240, 368, "portal")



        //CREACION INPUTS
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)

        //sonidos y musica
        this.musica = this.sound.add("musicafondo",{
            volume: 0.05,
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

        // creacion mapa y tile map
        mapa2 = this.make.tilemap({key: "nivel2"})
        const tilemap4 = mapa2.addTilesetImage("tiles4", "tiles4")
        const tilemap5 = mapa2.addTilesetImage("tiles5", "tiles5")
        // creacion layer plataformas y aplicacion de colliders
        hielo = mapa2.createStaticLayer("hielo", tilemap4)
        plataformas2 = mapa2.createStaticLayer("plataformas", tilemap4)
        plataformas2.setCollisionByProperty({collides: true})
        hielo.setCollisionByProperty({collides: true})
        fondo = mapa2.createStaticLayer("fondo", tilemap4)

        // pinchos creacion
        pinchos1 = this.physics.add.staticGroup()
        const spikeObjects = mapa2.getObjectLayer('pinchos')['objects'];
        spikeObjects.forEach(spikeObject => {
            const pincho1 = pinchos1.create(spikeObject.x +8, spikeObject.y -8, "pinchos1");
            pincho1.body.setSize(16, 8).setOffset(0, 8)
        });

        pinchos2 = this.physics.add.staticGroup()
        const spikeObjects2 = mapa2.getObjectLayer('pinchos2')['objects'];
        spikeObjects2.forEach(spikeObject2 => {
            const pincho2 = pinchos2.create(spikeObject2.x +8, spikeObject2.y -8, "pinchos2");
            pincho2.body.setSize(8, 16).setOffset(8, 0) 
        });
        pinchos3 = this.physics.add.staticGroup()
        const spikeObjects3 = mapa2.getObjectLayer('pinchos3')['objects'];
        spikeObjects3.forEach(spikeObject3 => {
            const pincho3 = pinchos3.create(spikeObject3.x +8, spikeObject3.y -8, "pinchos3");
            pincho3.body.setSize(16, 8).setOffset(0, 8)
        });

        //
        naranjasLayer = mapa2.getObjectLayer("naranja")["objects"]
        bananasLayer = mapa2.getObjectLayer("banana")["objects"]
        manzanasLayer = mapa2.getObjectLayer("manzana")["objects"]

        //
        naranjas = this.physics.add.staticGroup()
        manzanas = this.physics.add.staticGroup()
        bananas = this.physics.add.staticGroup()

        //
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

        // player
        player = this.physics.add.sprite(20,750, 'dino');
        player.setScale(1);
        velocidad = 175;
        salto = -310;
        //cambiamos el tamaño de hitbox del jugador
        player.setSize(10,16);
        player.setCollideWorldBounds(false);


        //colliders
        this.physics.add.collider(player, plataformas2, this.tocaPlataforma2,null,this);
        this.physics.add.collider(monedapowerup, plataformas2);
        this.physics.add.overlap(player, manzanas, this.agarrarManzana, null, this);
        this.physics.add.overlap(player, naranjas, this.agarrarNaranja, null, this);
        this.physics.add.overlap(player, bananas, this.agarrarBanana,null, this);
        this.physics.add.collider(player, pinchos1, this.hitPinchos, null, this);
        this.physics.add.collider(player, pinchos2, this.hitPinchos, null, this);
        this.physics.add.collider(player, pinchos3, this.hitPinchos, null, this);
        this.physics.add.collider(player, meta, this.llegarMeta, null, this);
        this.physics.add.collider(player, hielo, this.tocaHielo, null, this);
        this.physics.add.collider(player, monedapowerup, this.agarrarPowerup, null, this);
        this.physics.add.collider(player, portal, this.agarraPortal, null, this);
        //TEXTO INICIO y saltar
        empezarTexto = this.add.text (200 , 550, "5",{
            fontSize: 16
        })

        var saltarTexto = this.add.text(2400, 90, "Jump!")




        // camara
        camara = this.cameras.main;
        this.cameras.main.setBounds(0, 0, mapa2.widthInPixels, mapa2.heightInPixels);
        // TIEMPO
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        this.comenzar = this.time.addEvent({ delay: 6000, callback: this.tocaPlataforma, callbackScope: this, loop: false });
        camara.centerOn(player.x, player.y)
        camara.setZoom(2)    

        //contador
        this.cambia4 = this.time.addEvent({ delay: 1000, callback: this.cambia4, callbackScope: this, loop: false });
        this.cambia3 = this.time.addEvent({ delay: 2000, callback: this.cambia3, callbackScope: this, loop: false });
        this.cambia2 = this.time.addEvent({ delay: 3000, callback: this.cambia2, callbackScope: this, loop: false });
        this.cambia1 = this.time.addEvent({ delay: 4000, callback: this.cambia1, callbackScope: this, loop: false });
        this.cambiaGO = this.time.addEvent({ delay: 5000, callback: this.cambiaGO, callbackScope: this, loop: false });
        this.romperTexto = this.time.addEvent({ delay: 6000, callback: this.romperTexto, callbackScope: this, loop: false });

        //powerup
        this.puedeSaltar = false;
        agarroPowerUp = false;
    }

    update(){
        if (gameOver)
        {       
            return
        }
        // ESTO ME COSTO 4 HORAS 
        // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
        if (agarroPowerUp === true){
            if (Phaser.Input.Keyboard.JustDown(spacebar)) {
                if (player.body.blocked.down) {
                  // player can only double jump if it is on the floor
                  this.puedeSaltar = true;
                  player.body.setVelocityY(-310);
                  console.log("salta1 vez")
                } else if (this.puedeSaltar) {
                  this.puedeSaltar = false;
                  player.body.setVelocityY(-310);
                  console.log("salta 2 veces")
                }
            }
        }

        if (agarroPowerUp === false){
            if (Phaser.Input.Keyboard.JustDown(spacebar)) {
                if (player.body.blocked.down) {
                  // player can only double jump if it is on the floor
                  this.puedeSaltar = true;
                  player.body.setVelocityY(-310);
                  console.log("salta1 vez")
                }

            }
        }
        

        

        if (vidas2 == 0){
            this.gameOver();
        }


        camara.centerOn(player.x, player.y)
        
        musicamenu.pause();
        
    }

    tocaPlataforma2(){
        camara.setZoom(2);
        player.anims.play("right", true)
    }

    agarrarPowerup(player, monedapowerup){
        player.setVelocityX(velocidad)
        agarroPowerUp = true;
        monedapowerup.destroy()
        console.log("agarra moneda")
    }

    agarraPortal(){
        player.setX(2250);
        player.setY(100);
        player.setVelocityX(velocidad+ 50);
    }


    tocaPlataforma(){
        player.anims.play("right", true);
        if (agarraPowerup === true){
            player.setVelocityX(velocidad + velocidadPowerup)
            console.log("tiene powerup")
        }
        else if(agarraPowerup === false){
            player.setVelocityX(velocidad)
            console.log("va normal")
        }
    }

    tocaHielo(){
        player.setVelocityX(velocidadHielo + velocidadPowerup)
        player.anims.stop()
        camara.setZoom(3)
    }

    playerSalta(){
        player.setVelocityY(salto)
        this.saltar.play();
    }

    empiezaCorrer(){
        player.anims.play("right")
        player.setVelocityX(velocidad)
        console.log("comienza a correr")
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


    hitPinchos(player, spikes){
        vidas2 --;
        this.registry.set("vidas2", vidas2)
        player.setX(10)
        player.setY(720)
        console.log("pierde vida")
        player.setVelocityX(velocidad)
    }

    llegarMeta(player, meta){
        console.log("ganaste")
        this.physics.pause();
        player.disableBody();
        player.setX(1024/2);
        player.setY(400);
        player.anims.stop("right", true);
        this.musica.stop();
        this.scene.stop("ui2")
        this.timedEvent.paused = true;
        camara.setZoom(2);
        var textoGanar = this.add.text(game.width/2,game.height/2,'Ganaste', { fontFamily: 'Arial', fontSize: 64, color: 'green' });
        Phaser.Display.Align.In.Center(textoGanar, this.add.zone(1024/2, 768/2-100, 1024, 768));   
        var botonSiguiente = this.add.image(700, 550, 'boton_siguiente')
        botonSiguiente.setInteractive()
        botonSiguiente.setScale(0.2);
        botonSiguiente.on('pointerdown', () => this.scene.start("puntuacion"));

        var botonSalir = this.add.image(330, 550, 'boton_salir')
        botonSalir.setInteractive()
        botonSalir.setScale(0.2);
        botonSalir.on('pointerdown', () => this.scene.start("menu"));
    }

    gameOver() {   
        gameOver = true;
        player.setTint(0xff0000);
        player.disableBody(true);
        this.physics.pause();
        player.setX(1024/2);
        player.setY(400);
        player.anims.stop("right", true);
        this.musica.stop();
        this.timedEvent.paused = true;
        this.scene.stop("ui2")

        var textoPerder = this.add.text(game.width/2,game.height/2,'Perdiste', { fontFamily: 'Arial', fontSize: 64, color: 'red' });
        Phaser.Display.Align.In.Center(textoPerder, this.add.zone(1024/2, 768/2-100, 1024, 768));   
        // var botonReintentar = this.add.image(700, 550, 'boton_reintentar')
        // botonReintentar.setInteractive()
        // botonReintentar.setScale(0.2);
        // botonReintentar.on('pointerdown', () => this.scene.start("nivel2"));

        var botonSalir = this.add.image(340, 550, 'boton_salir')
        botonSalir.setInteractive()
        botonSalir.setScale(0.2);
        botonSalir.on('pointerdown', () => this.scene.start("menu"));
    }

    agarrarManzana(player, manzanas){
        manzanas.destroy(manzanas.x, manzanas.y)
        puntuacionnivel2 += 5;
        this.registry.set('agarrafruta2', puntuacionnivel2);
        this.fruta.play();
        tiempoInicial2 += 3;
        return false;
    }
    agarrarNaranja(player, naranjas){
        naranjas.destroy(naranjas.x, naranjas.y)
        puntuacionnivel2 += 2;
        this.registry.set('agarrafruta2', puntuacionnivel2);
        this.fruta.play();
        tiempoInicial2 += 2;
        return false;
    }
    agarrarBanana(player, bananas){
        bananas.destroy(bananas.x, bananas.y)
        puntuacionnivel2 += 1;
        this.registry.set('agarrafruta2', puntuacionnivel2);
        this.fruta.play();
        tiempoInicial2 += 1;
        return false;
    }
    
    onSecond() {
        this.registry.set ("tiempo2", tiempoInicial2)
        tiempoInicial2 = tiempoInicial2 - 1; // One second
        if (tiempoInicial2 == 1) {
            this.gameOver();
        }            
    

}





























}