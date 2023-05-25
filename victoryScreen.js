
class victoryScreen extends Phaser.Scene {
    constructor() {
        super('victoryScreen');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('tit', 'title2.png');
    }
    create() {
        this.winText = this.add.text(
            100, //x
            250,//y
            "You win!!!", //text
            {
                font: "50px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );

    }
}