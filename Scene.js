class Scene extends Phaser.Scene {
    constructor() {
        super("animate");
    }
    
    preload() {
        const imageUrl = window.innerWidth < 1100 ? 'assets/main-bg-portrait.png' : 'assets/main-bg.png'

        this.load.image('background', imageUrl)

        this.load.atlas('shiningStars', 'assets/backgroundAnim.png', 'backgroundAnim.json')
    }

    create() {

        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        this.shiningStars = this.add.sprite(0, 0, 'shiningStars')
        this.shiningStars.setOrigin(0, 0);

        var landscapeKeys = ['landscape_01','landscape_03','landscape_03','landscape_04','landscape_05'];
        var portraitKeys = ['portrait_01','portrait_03','portrait_03','portrait_04','portrait_05']

        if(window.innerWidth > 1100) {
            this.background = this.add.image(0, 0, 'background');
            this.background.setOrigin(0, 0);
    
            this.lightStars(landscapeKeys, 1080)
        } else {
            this.background = this.add.image(0, 0, 'background');
            this.background.setOrigin(0, 0);
    
            this.lightStars(portraitKeys, 1920)
        }
    }
    
    lightStars(keys, height) {
        this.time.addEvent({
            delay: 300,
            callback: function () {
                this.starCol1.visible = false;
                this.starCol2.visible = false;
                this.starCol3.visible = false;
                this.starCol4.visible = false;
                this.starCol5.visible = false;
            },
            callbackScope: this,
            loop: true
        });

        this.starCol1 = this.add.sprite(0, 0, 'shiningStars', keys[0])
        this.starCol1.setOrigin(0, 0);
        this.starCol2 = this.add.sprite(0, 0, 'shiningStars', keys[1])
        this.starCol2.setOrigin(0, 0);
        this.starCol3 = this.add.sprite(0, 0, 'shiningStars', keys[2])
        this.starCol3.setOrigin(0, 0);
        this.starCol4 = this.add.sprite(0, 0, 'shiningStars', keys[3])
        this.starCol4.setOrigin(0, 0);
        this.starCol5 = this.add.sprite(0, 0, 'shiningStars', keys[4])
        this.starCol5.setOrigin(0, 0);

        this.starCol1.displayHeight = height;
        this.starCol1.scaleX = this.starCol1.scaleY;
        this.starCol1.alpha = 0.6;

        this.starCol2.displayHeight = height;
        this.starCol2.scaleX = this.starCol2.scaleY;
        this.starCol2.alpha = 0.2;

        this.starCol3.displayHeight = height;
        this.starCol3.scaleX = this.starCol3.scaleY;
        this.starCol3.alpha = 0.4;

        this.starCol4.displayHeight = height;
        this.starCol4.scaleX = this.starCol4.scaleY;
        this.starCol4.alpha = 0.2;

        this.starCol5.displayHeight = height;
        this.starCol5.scaleX = this.starCol5.scaleY;
        this.starCol5.alpha = 0.6;
    }

    update() {
        setInterval(() => {
            if (this.starCol1.visible === false) {
                this.starCol1.visible = true;
                this.starCol2.visible = true;
                this.starCol3.visible = true;
                this.starCol4.visible = true;
                this.starCol5.visible = true;
            }
        }, 400)
    }
}