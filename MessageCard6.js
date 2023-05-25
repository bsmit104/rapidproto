class MessageCard6 extends Phaser.Scene {
    constructor() {
        super('messagecard6');
    }
    preload(){
        this.load.path = "./assets/";
    }
    create() {
        this.cameras.main.setBackgroundColor('#000000');
        this.textObject0 = this.add.text(
            100, //x
            250,//y
            "The roly poly gets a badge!", //text
            {
                font: "50px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
        this.textObject8 = this.add.text(
            700, //x
            500,//y
            "tap", //text
            {
                font: "30px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
        this.tweens.add({
            targets: this.textObject8,
            alpha:0,
            duration: 2000,
            repeat: -1,
        });
        this.input.on('pointerdown', () => this.scene.start('start'));
    }
}