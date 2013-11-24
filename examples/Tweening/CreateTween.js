/**
* This script is a demonstration of creating a tween.
*
* Note: A tween is the transition of values between A - B, and thus in Kiwi the tweem manager handles the transition of those values.
* As such you a tween can be added to property/method as long as the value can be changed constantly.
* So think big with tweening as lots of stuff can be tweened.
*
**/
var CreateTween = new Kiwi.State('CreatingATween');

CreateTween.preload = function () {
    this.game.stage.resize(800, 250);
    this.addImage('bullet', 'assets/static/bullet-normal.png');
}

CreateTween.create = function () {
    //Text
    var text = new Kiwi.GameObjects.Textfield(this, 'Wait and Watch the bullet move!', this.game.stage.width / 2, 10, '#000', 12);
    text.textAlign = 'center';
    this.addChild(text);

    //Create the bullet
    this.bullet = new Kiwi.GameObjects.Sprite(this, this.textures.bullet, 100, 50);
    this.addChild(this.bullet);

    /**
    * To create a tween you need to create the tween via the manager.
    * When you create the tween you pass in the object that the tween is taking affect on.
    **/
    this.tween = this.game.tweens.create(this.bullet);

    /**
    * Using the method 'to' you tell the tween where you want the object to go 'to'
    * Parameter One - Object with the finished values. Can contain more than one value
    * Parameter Two - Duration in milliseconds.
    * Parameter Three - OPTIONAL - Easing method to use. - Default is linear none
    **/
    this.tween.to({ x: 800 }, 1000, Kiwi.Animations.Tweens.Easing.Linear.None);
    this.tween.delay(2000);
    this.tween.start();
}



//Create's a new Kiwi.Game.
/*
* Param One - DOMID - String - ID of a DOMElement that the game will reside in.
* Param Two - GameName - String - Name that the game will be given.
* Param Three - State - Object - The state that is to be loaded by default.
* Param Four - Options - Object - Optional options that the game will use whilst playing. Currently this is used to to choose the renderer/debugmode/device to target
*/
if(typeof  gameOptions == "undefined")  gameOptions = {};

var game = new Kiwi.Game('game', 'KiwiExample', CreateTween,  gameOptions);