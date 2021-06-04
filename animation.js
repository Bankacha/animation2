    let config = {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#ffffff',
        scene: [Scene], 
        pixelArt: true,
        // scale: {
        //     mode: Phaser.Scale.ScaleModes.FIT,
        //     // autoCenter: Phaser.Scale.Center.CENTER_BOTH
        // },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        }
    }



window.onload = function () {
    var animation = new Phaser.Game(config);
}
