
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var bg = new cc.Sprite(res.first_bg_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        //add start sprite
        var startMenuItem = new cc.MenuItemImage(
            "res/start_up.png",
            "res/start_down.png",
            function () {
                cc.log("startMenuItem is clicked!");
                cc.director.pushScene(new GameScene());
            }, this);
        startMenuItem.x = size.width / 2;
        startMenuItem.y = size.height - 500;

        //add about sprite
        var aboutMenuItem = new cc.MenuItemImage(
            "res/about_up.png",
            "res/about_down.png",
            function () {
                cc.log("aboutMenuItem is clicked!");
                cc.director.pushScene(cc.Scene(new AboutScene()));
            }, this);
        aboutMenuItem.x = size.width / 2 + 165;
        aboutMenuItem.y = size.height - 450;

        var mu = new cc.Menu(startMenuItem, aboutMenuItem);
        mu.x = 0;
        mu.y = 0;
        this.addChild(mu);

    },

    menuItemStartCallback: function (sender) {
        cc.log("menuItemStartCallback!");
    },
    menuItemAboutCallback: function (sender) {
        cc.log("menuItemAboutCallback!");
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

